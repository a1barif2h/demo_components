import './App.css';
// import DragAndDropColumnsTable from './compnents/DragAndDropColumnsTable';
import ColAndRowDragAndDrop from './compnents/ColAndRowDragAndDrop';

function App() {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Drag and Drop Row in Table</h1>
      {/* <DragAndDropTable /> */}
      {/* <DragAndDropColumnsTable /> */}
      {/* <Demo /> */}
      <ColAndRowDragAndDrop />
    </div>
  );
}

export default App;
