import React from "react";
import Navbar from "../src/components/navbar";
import "./App.css";
import Cartwidget from "../src/components/cartwidget";
import ItemListContainer from "../src/components/itemlistContainer";



const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Cartwidget />
      <ItemListContainer />
    </div>
  );
};

export default App;
