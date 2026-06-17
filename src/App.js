import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
