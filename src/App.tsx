import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import "./App.css";

function App(): JSX.Element {
  return (
    <div className="App">
      <header>
        <h1>This is the header </h1>
        <Link to="/">Home</Link> | <Link to="/portfolio">Portfolio</Link> |{" "}
        <Link to="/detail">Details</Link> |{" "}
        <Link to="/contact">Contact Me</Link> |{" "}
      </header>
      <Outlet />
      <footer> This is the footer </footer>
    </div>
  );
}

export default App;
