import logo from "./logo.svg";
import "./App.css";
import AgGridStart from "./components/AgGridStart";
import AgGridStyle from "./components/AgGridStyle";
import GridExample from "./components/GridExample";

function App() {
  return (
    <div className="App">
      {/* <AgGridStart />
      <AgGridStyle /> */}
      <GridExample />
    </div>
  );
}

export default App;
