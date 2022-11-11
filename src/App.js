import React,{useEffect} from "react";
import './App.css';
import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";


function App(){

  return (
    <Suspense fallback={null}>
    <Router>
   
    <Routes>
   
    <Route path="/home" element={<Home/>}/>
    
    </Routes>
    </Router>
  </Suspense>
  );
}

export default App;
