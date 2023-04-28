import styled from "styled-components"
import StockAccordion from "./component/StockAccordion";
import KeywordAccordion from "./component/KeywordAccordion";
import TargetListSection from "./component/TargetListSection";

function App() {
  return (
    <div className="App">
      <h1>Drag and Drop Practice</h1>
      <MainWrapper>
        <AccordionWrapper>
          <StockAccordion />
          <KeywordAccordion />
        </AccordionWrapper>
        <TargetListSection />
      </MainWrapper>
    </div>
  );
}

export default App;

const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`