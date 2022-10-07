import logo from "./logo.svg";
import "./App.css";
/* import Greeting from "./components/pure/Greeting";
import TaskList from "./components/container/TaskList"; */
import ComponentA from "./components/pure/ComponentA";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*     <Greeting name="Lupe" /> */}
        {/* component reb¡nder task list */}
        {/* <TaskList /> */}
        <ComponentA />
      </header>
    </div>
  );
}

export default App;
