import { useRecoilState, useRecoilValue } from "recoil";
import {
  selectedLaboratoryStockState,
  selectedLaboratoryKeywordListState,
} from "../store/LaboratoryAtoms";

import styled from "styled-components";

import StockCardMini from "./StockCardMini";
import KeywordCardMini from "./KeywordCardMini";

interface Props {
  type: string;
}

const DndBox = ({ type }: Props) => {
  // type: STOCK / KEYWORD1 / KEYWORD2 / KEYWORD3
  const text = type === "STOCK" ? "종목" : "키워드";

  const [stock, setStock] = useRecoilState(selectedLaboratoryStockState);
  const [keywordList, setKeywordList] = useRecoilState(
    selectedLaboratoryKeywordListState
  );


  return (
    <BoxWrapper>
      {type === "STOCK" && stock ? (
        <StockCardMini item={stock} />
      ) : type.startsWith("KEYWORD") && keywordList.length >= parseInt(type[7]) ? (
        <KeywordCardMini item={keywordList[parseInt(type[7])-1]} />
      ) : (
        <DropBoxWrapper>{text}</DropBoxWrapper>
      )}
    </BoxWrapper>
  );
};

export default DndBox;

const BoxWrapper = styled.div`
  width: 120px;
  height: 120px;
  padding: 0.5em;
`;

const DropBoxWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 12px;
  font-weight: 700;
  color: #79747e;
  background: #f8f8f8;

  border: 1.5px dashed #cac4d0;
  border-radius: 24px;
`;
