import React from "react";
import { useContext } from "react";
import { ProductContext } from "../../Context";
import "./ProductCard.css";

function ProductCard({ id, photo, title, price }) {
  const { addToCart } = useContext(ProductContext);

  return (
    <>
      <div
        className="item-card card text-center p-2"
        style={{ width: "200px" }}
      >
        <div
          className="item-image m-auto "
          style={{ width: "100px", height: "100px" }}
        >
          <img
            src={photo}
            alt=" Loading..."
            className="w-100 h-100 rounded-circle "
          />
        </div>
        <h5>{title}</h5>
        <p>Price Rs. {price}</p>
        <button className="btn btn-primary" onClick={() => addToCart(id)}>
          Add To Cart
        </button>
      </div>
    </>
  );
}

export default ProductCard;
