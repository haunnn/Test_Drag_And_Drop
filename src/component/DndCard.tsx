// drag and drop 용 card

import { useSetRecoilState, useRecoilState } from "recoil";
import {
  selectedLaboratoryStockState,
  selectedLaboratoryKeywordListState,
} from "../store/LaboratoryAtoms";
import { StockType, KeywordType } from "../store/LaboratoryAtoms";
import { useDrag } from "react-dnd";
import styled from "styled-components";
import StockCardMini from "./StockCardMini";
import KeywordCardMini from "./KeywordCardMini";

interface ParamProps {
  type: string;
  item: StockType | KeywordType;
  size?: string;
}

const DndCard = ({ type, item, size = "100px" }: ParamProps) => {
  const setStock = useSetRecoilState(selectedLaboratoryStockState);
  const setKeywordList = useSetRecoilState(selectedLaboratoryKeywordListState);


  //isDragging은 아이템이 드래깅 중일때 true, 아닐때 false를 리턴 받는다. 드래깅 중인 아이템을 스타일링 할때 사용
  //dragRef는 리액트의 useRef처럼 작동한다. 드래그될 부분에 선언
  //previewRef는 드래깅될때 보여질 프리뷰 이미지
  const [{ isDragging }, dragRef, previewRef] = useDrag(
    () => ({
      type,
      item,
      collect: (monitor) => ({
        //isDragging 변수가 현재 드래깅중인지 아닌지를 리턴
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        // 드래그가 끝났을때 recoil state 변경
        const dropResult: { dropEffect: string; name: string } | null =
          monitor.getDropResult();
        if (!dropResult) return;

        // STOCK
        if (type === "STOCK") {
          setStock(item);
          return;
        }

        // KEYWORD
        if (type === "KEYWORD") {
          setKeywordList((prev) => [...prev, item]);
          return;
        }
      },
    }),
    [item]
  );

  return (
    <CardWrapper ref={dragRef} opacity={`${isDragging ? 0.4 : 1}`} size={size}>
      {type === "STOCK" ? (
        <StockCardMini item={item} />
      ) : (
        <KeywordCardMini item={item} />
      )}
    </CardWrapper>
  );
};

export default DndCard;

const CardWrapper = styled.div<{ opacity: string; size: string }>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  opacity: ${(props) => props.opacity};
`;
