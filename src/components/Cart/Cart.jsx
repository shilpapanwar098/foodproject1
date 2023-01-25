import React from "react";
import "./Cart.css";
import Header from "../Header/Header";
import { useContext } from "react";
import { ProductContext } from "../../Context";

function Cart() {
   const {
    orderList,
    setOrderList,
    counter,
    totalAmount,
    total,
    increamentItem,
    decreamentItem,
  } = useContext(ProductContext);

  const handleSubmitButton = (e) => {
    e.preventDefault();
    alert("Your Payment has been successfully done!");
  };
  totalAmount();
  return (
    <>
      <Header />

      <h3 className="text-center bg-dark text-white p-2">Cart Items</h3>
      <div className="selected-cart-products-list  w-75 m-auto text-center">
        <table>
          <thead>
            <th>Item</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </thead>
          <tbody>
                 {orderList.map((item) => {
              return (
                <tr className="bg-success " key={item.id}>
                  <td className="text-white ">
                    <h5>Image</h5>
                  </td>
                  <td className="text-white">{item.title}</td>
                  <td className="text-white p-3">
                    <button
                      className="btn btn-primary"
                      onClick={() => decreamentItem(item.id)}
                    >
                      -
                    </button>
                    <span className="mx-1"> {item.quantity}</span>
                    <button
                      className="btn btn-primary"
                      onClick={() => increamentItem(item.id)}
                    >
                      +
                    </button>
                  </td>
                  <td className="text-white">{item.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="card p-3 w-25 m-auto my-5">
        <p className="h4">Total Item : {counter}</p>
        <p className="h4">{total}</p>
        <p className="h4 text-success">Free delievery on Rs.1000</p>
        <button
          onClick={handleSubmitButton}
          className="btn btn-danger text-center text-decoration-none"
          style={{ "font-size": "22px" }}
        >
          Checkout
        </button>
      </div>
    </>
  );
}

export default Cart;
