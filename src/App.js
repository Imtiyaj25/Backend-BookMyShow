import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About-2";
import AnotherComponent from "./components/anather";
import ParentComponent from "./components/parent";
import Navbar from "./components/Navbar";
import ExperiencesForm from "./components/mycomp";

function App() {
  return (
    <ParentComponent/>
    // <ExperiencesForm/>
    // <BrowserRouter>
      
    //   <Routes>
    //   <Route path="/" element={<Navbar/>}/>
    //     <Route path="ParentComponent" element={<ParentComponent/>}/>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
