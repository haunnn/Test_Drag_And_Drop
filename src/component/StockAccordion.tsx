import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { selectedLaboratoryStockState } from "../store/LaboratoryAtoms";
import DndCard from "./DndCard";

const sampleItem = [
  {
    id: 1,
    name: "stock1",
  },
  {
    id: 2,
    name: "stock2",
  },
  {
    id: 3,
    name: "stock3",
  },
  {
    id: 4,
    name: "stock4",
  },
  {
    id: 5,
    name: "stock5",
  },
  {
    id: 6,
    name: "stock6",
  },
  {
    id: 7,
    name: "stock7",
  },
  {
    id: 8,
    name: "stock8",
  },
];

const StockAccordion = () => {
  
  return (
    <PanelLayout>
      <HeaderWrapper>종목</HeaderWrapper>
      <ContentWrapper>
        {sampleItem.map((item) => {
          return (
            <DndCard
              key={item.id}
              item={item}
              type="STOCK"
            />
          );
        })}
      </ContentWrapper>
    </PanelLayout>
  );
};

export default StockAccordion;

export const PanelLayout = styled.div`
  width: 100%;
  background: #f8f8f8;
  border-radius: 24px;

  margin: 30px;
  padding: 18px 0px;

  box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15),
    0px 1px 3px rgba(0, 0, 0, 0.3);
`;

export const HeaderWrapper = styled.div`
  padding: 0 30px 12px 30px;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 400px;
  overflow: auto;

  padding: 10px 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 22px;
`;
