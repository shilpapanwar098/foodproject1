import React, { createContext } from "react";
import { useState } from "react";
import { foodItems } from "./components/FoodItems";

const ProductContext = createContext({});

const Context = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const [orderList, setOrderList] = useState([]);
  const [total, setTotal] = useState(0);

  var cartData = [...orderList];
  const addToCart = (id) => {
    var itemObj = foodItems.find((item) => item.id == id);
    var index = cartData.indexOf(itemObj);

    if (index === -1) {
      cartData.push(itemObj);
      setCounter(counter + 1);
      setOrderList(cartData);
    } else if (index > -1) {
      alert("Already Added to cart!");
    }
  };

  function totalAmount() {
    var sum = 0;
    cartData.map((item) => {
      sum += item.price;
    });

    setTotal(sum);
  }

  return (
    <ProductContext.Provider
      value={{
        totalAmount: totalAmount,
        orderList,
        setOrderList,
        counter,
        total,
        addToCart: addToCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, Context };
