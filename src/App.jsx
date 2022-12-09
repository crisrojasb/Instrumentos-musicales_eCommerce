import React from 'react';
import { Header } from "./components/header";
import { ProductList } from "./components/products/index";
import 'boxicons';
import Navbar from "./components/Navbar";
import ItemList from "./components/ItemList";

const App = () => {
  return (
    <div className="App">
      {/* <Navbar/>
      <ItemList greetings ="Bienvenidos a su tienda musical"/> */}
      <Header/>
      <ProductList/>
    </div>
  )
}

export default App;