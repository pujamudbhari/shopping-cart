import React, { useState } from "react";
import data from "./components/back/Data/Data";
import Header from "./components/front/header/header";
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/front/Routes/Routes";

const App = () => {
  const { productItems } = data;
  const [cartItems, setCartItems] = useState([]);
  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems.map((item) =>
        item.id === product.id
          ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
          : item
      );
    }
  };

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes
          productItems={productItems}
          cartItems={cartItems}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
        />
      </BrowserRouter>
    </div>
  );
};

export default App;
