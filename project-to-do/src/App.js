import logo from "./logo.svg";
import "./App.css";
/* import Greeting from "./components/pure/Greeting";
import TaskList from "./components/container/TaskList"; */
/* import ComponentA from "./components/pure/ComponentA"; */
/* import Ejemplo2 from "./hooks/Ejemplo2"; */
/* import MiComponenteConContexto from "./hooks/Ejemplo3"; */
import GeetingStyled from "./components/pure/forms/GeetingStyled";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*     <Greeting name="Lupe" /> */}
        {/* component reb¡nder task list */}

        {/* <TaskList /> */}
        {/*     <ComponentA /> */}
        {/*    <Ejemplo2 /> */}
        {/*       <MiComponenteConContexto /> */}
        <GeetingStyled name="lupe" />
      </header>
    </div>
  );
}

export default App;
