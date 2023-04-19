import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "./screens/Home/Home";

function App() {
  return (
    <>
    <div>
      <Navbar></Navbar>
    </div>
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App;
