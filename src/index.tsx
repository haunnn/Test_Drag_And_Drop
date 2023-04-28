import ReactDOM from 'react-dom/client';
import App from './App';
import { RecoilRoot } from "recoil"                
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RecoilRoot>
    {/* Wrap components that will be "draggable" and "droppable" */}
    <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>
  </RecoilRoot>
);


reportWebVitals();
