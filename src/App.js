import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


function App() {
  return (
        <div className="App">
          <Navbar />
          <Hero />
         <ItemListContainer />
        </div>
  );
}

export default App;
