import { KeywordType } from "../store/LaboratoryAtoms";
import { useRecoilState } from 'recoil'
import { selectedLaboratoryStockState } from "../store/LaboratoryAtoms";
import { useDrag } from "react-dnd";
import styled from "styled-components";

interface ParamProps {
  keyword: KeywordType;
}

const KeywordCard = ({ keyword }: ParamProps) => {
  const [stock, setStock] = useRecoilState(selectedLaboratoryStockState);


  //isDragging은 아이템이 드래깅 중일때 true, 아닐때 false를 리턴 받는다. 드래깅 중인 아이템을 스타일링 할때 사용
  //dragRef는 리액트의 useRef처럼 작동한다. 드래그될 부분에 선언
  //previewRef는 드래깅될때 보여질 프리뷰 이미지
  const [{ isDragging }, dragRef, previewRef] = useDrag(
    () => ({
      type: "keywordCard",
      item: keyword,
      collect: (monitor) => ({
        //isDragging 변수가 현재 드래깅중인지 아닌지를 리턴
        isDragging: monitor.isDragging(),
      }),
      end: (keyword, monitor) => {
        // 드래그가 끝났을때 recoil state 변경
        const dropResult: {dropEffect: string, name: string} | null = monitor.getDropResult();
        if (!dropResult) return;
        const idx = dropResult.name[7]
        if (!idx) 
          setStock(keyword)
      }
    }),
    [keyword]
  );


  return (
    <CardWrapper ref={dragRef} opacity={`${isDragging ? 0.4 : 1}`}>
      {keyword.name}
    </CardWrapper>
  );
};

export default KeywordCard;

const CardWrapper = styled.div<{ opacity: string }>`
  width: 100px;
  height: 100px;
  margin: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;

  background: #ffffff;
  box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15),
    0px 1px 3px rgba(0, 0, 0, 0.3);
  border-radius: 24px;

  opacity: ${(props) => props.opacity};
`;
