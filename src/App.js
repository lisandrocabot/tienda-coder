import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ItemListContainer from "./components/ItemContainer/ItemListContainer"
import './App.css';


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
