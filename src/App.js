import "./App.css";
import React from "react";
import Navbar from "./Navbar/Navbar";
import Home from './Home/Home'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
  <Navbar />  
        <Routes>
        <Route path="/onehash" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
