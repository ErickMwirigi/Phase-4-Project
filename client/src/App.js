import React,{ useState, useEffect } from "react";
import Erick from "./Erick";
import Cover from "./components/Cover";

import './App.css';


const productURL = "http://localhost:3000/products";




function App() {
  return (
    <div>
      {/* <Erick /> */}
      <Cover />
      
    </div>
  );
}

export default App;
