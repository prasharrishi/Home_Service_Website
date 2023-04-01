import React from "react";
import NavBar from "./Components/NavBar";
import "./App.css";
import Services from "./Components/Services";
import women from "./assets/women.png";
import Footer from "./Components/Footer";
import Introduction from "./Components/Introduction";
import Home from "./Components/Home";
import { Routes,Route} from 'react-router'

function App() {
  return (
    <>
   <NavBar/>
    <Routes>
      <Route path={"/"} element={<Home />} />
    </Routes>

      </>
  );
}

export default App;
