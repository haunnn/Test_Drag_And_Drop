import { useDrop } from "react-dnd";
import styled from "styled-components"

const TargetPanel = () => {
  const [{ canDrop, isOver }, dropRef ] = useDrop(() => ({
    accept: 'itemCard',
    drop: () => ({name: 'Some name'}),
    collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
    }),
  }),
  []
  );
  
  console.log('here', {canDrop, isOver})

  return (
    <TargetPanelLayout ref={dropRef}>
      <HeaderWrapper>
        분석 요소
      </HeaderWrapper>
      <ContentWrapper>

      </ContentWrapper>
    </TargetPanelLayout>
  )
}

export default TargetPanel;

const TargetPanelLayout = styled.div`
  width: 60%;
  height: 200px;
  background: #FFFFFF;
  border-radius: 24px;

  margin: 30px;
  padding: 18px 0px;

  box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15),
  0px 1px 3px rgba(0, 0, 0, 0.3);
`
const HeaderWrapper = styled.div`
  padding: 0 30px 12px 30px;
`

const ContentWrapper = styled.div`
`