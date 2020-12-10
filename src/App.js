import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemContainer/ItemListContainer"
import './App.css';


function App() {
  return (
        <div className="App">
          <Navbar />
          <ItemListContainer greeting="Aca van los productos"/>
        </div>
  );
}

export default App;
