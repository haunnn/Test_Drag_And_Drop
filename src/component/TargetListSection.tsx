import { useRecoilValue } from "recoil";
import { selectedLaboratoryStockState, selectedLaboratoryKeywordListState } from "../store/LaboratoryAtoms";
import { useDrop } from "react-dnd";
import DndBox from "./DndBox";
import styled from "styled-components";

const TargetListSection = () => {
  const stock = useRecoilValue(selectedLaboratoryStockState);
  const keywordList = useRecoilValue(selectedLaboratoryKeywordListState);

  const [{ canDrop, isOver }, dropRef] = useDrop(
    () => ({
      accept: ["STOCK", "KEYWORD"],
      // drop: () => ({ name: type }),
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
        // canDrop: monitor.canDrop(),
      }),
    }),
    []
  );

  return (
    <TargetPanelLayout ref={dropRef}>
      <HeaderWrapper>분석 요소</HeaderWrapper>
      <ContentWrapper>
        <DndBox type={"STOCK"} />
        <DndBox type={"KEYWORD1"} />
        <DndBox type={"KEYWORD2"} />
        <DndBox type={"KEYWORD3"} />
      </ContentWrapper>
    </TargetPanelLayout>
  );
};

export default TargetListSection;

const TargetPanelLayout = styled.div`
  width: 60%;
  height: 200px;
  background: #ffffff;
  border-radius: 24px;

  margin: 30px;
  padding: 18px 0px;

  box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15),
    0px 1px 3px rgba(0, 0, 0, 0.3);
`;
const HeaderWrapper = styled.div`
  padding: 0 30px 12px 30px;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 24px 30px 30px 40px;
`;
