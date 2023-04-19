import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "./screens/Home/Home";
import Details from './screens/Details/Details';

function App() {
  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:countryName" element={<Details />} />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App;
