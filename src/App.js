import "./App.css";

import SearchEngine from "./SearchEngine";
import Footer from "./Footer";

function App() {
  return (
    <div className="App container">
      <h1 className="">Weather Search Engine</h1>
      <p>
        This is my trial React App{" "}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </p>

      <br />

      <SearchEngine />

      <Footer />
    </div>
  );
}

export default App;
