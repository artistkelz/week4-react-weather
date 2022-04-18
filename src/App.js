import "./App.css";

import Search from "./Search";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search />
      <br />
      <footer>
        This project was coded by Kelsey Murray and is open-sourced on{" "}
        <a
          href="https://github.com/artistkelz/week4-react-weather"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
