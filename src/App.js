import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import ParentComponent from "./components/Pages/Preview";
import Navbar from "./components/OtherComponents/Navbar";
import HomePage from "./components/Pages/Home";
import AboutPage from "./components/Pages/About";
import Footer from "./components/OtherComponents/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/aboutpage" element={<AboutPage/>}/>
        <Route path="/parentcomponent" element={<ParentComponent/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
