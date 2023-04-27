import styled from "styled-components"
import ItemPanel from "./component/ItemPanel";
import TargetPanel from "./component/TargetPanel";

function App() {
  return (
    <div className="App">
      <h1>Drag and Drop Practice</h1>
      <Wrapper>
        <ItemPanel />
        <TargetPanel />
      </Wrapper>
    </div>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`