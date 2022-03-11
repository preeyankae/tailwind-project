import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="bg-sky-600 hover:bg-sky-800 peer">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link peer-focused:bg-sky-400"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
