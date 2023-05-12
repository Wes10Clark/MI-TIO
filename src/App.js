import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Drinks from "./pages/Drinks";
import Info from "./pages/Info";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Drinks" element={<Drinks />} />
        <Route path="/Info" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
