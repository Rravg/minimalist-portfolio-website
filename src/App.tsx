import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/Header";

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <footer> This is the footer </footer>
    </div>
  );
}

export default App;
