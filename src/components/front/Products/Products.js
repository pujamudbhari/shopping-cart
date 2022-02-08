import React from "react";
import "./Products.css";
import data from "../../back/Data/Data";

const Products = ({ productItems, handleAddProduct }) => {
  return (
    <div className="products">
      {data.productItems.map((productItem) => (
        <div className="card">
          <div>
            <img
              className="product-image"
              src={productItem.image}
              alt={productItem.name}
            />
          </div>
          <div>
            <h3 className="product-name">{productItem.name}</h3>
          </div>
          <div className="product-price">{productItem.price}</div>
          <button
            className="product-add-button"
            onClick={() => handleAddProduct(productItem)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};
export default Products;
