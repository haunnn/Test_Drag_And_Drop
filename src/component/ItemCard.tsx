import { useDrag } from "react-dnd";
import styled from "styled-components";

interface Props {
  keyword: string;
}

const ItemCard = ({ keyword }: Props) => {
   //isDragging은 아이템이 드래깅 중일때 true, 아닐때 false를 리턴 받는다. 드래깅 중인 아이템을 스타일링 할때 사용
  //dragRef는 리액트의 useRef처럼 작동한다. 드래그될 부분에 선언
  //previewRef는 드래깅될때 보여질 프리뷰 이미지
  const [{ isDragging }, dragRef, previewRef] = useDrag(() => ({
    type: 'itemCard',
    item: { keyword },
    collect: (monitor) => ({
      //isDragging 변수가 현재 드래깅중인지 아닌지를 리턴
      isDragging: monitor.isDragging(),
    })
  }),
  [keyword]
  );

  const opacity = isDragging ? 0.4 : 1;

  return (
    <div ref={dragRef} className='movable-item' style={{  opacity }}>
      <CardWrapper>{keyword}</CardWrapper>
    </div>
  )
  
  
};

export default ItemCard;

const CardWrapper = styled.div`
  width: 100px;
  height: 100px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;

  margin: 10px;

  background: #ffffff;
  box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15),
    0px 1px 3px rgba(0, 0, 0, 0.3);
  border-radius: 24px;
`;
