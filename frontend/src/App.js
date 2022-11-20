import "./App.css";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Edit from "./components/Edit";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Contact />} />
        <Route path="/user/:id" element={<Edit />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
