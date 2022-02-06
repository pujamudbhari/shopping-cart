import React, { useState } from "react";
import data from "./components/back/Data/Data";
import Header from "./components/front/header/header";
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/front/Routes/Routes";

const App = () => {
  const { productItems } = data;
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes productItems={productItems} cartItems={cartItems} />
      </BrowserRouter>
    </div>
  );
};

export default App;
