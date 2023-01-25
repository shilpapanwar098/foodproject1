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
  
  
  var currPrice = 0;
  function increamentItem(id) {
    var incObj = cartData.find((element) => element.id == id);
    incObj.quantity += 1;

    currPrice =
      (incObj.price * incObj.quantity - incObj.price * (incObj.quantity - 1)) /
      (incObj.quantity - 1);
    incObj.price = currPrice * incObj.quantity;

    setOrderList(cartData);
  }

  function decreamentItem(id) {
    let decObj = cartData.find((element) => element.id == id);
    let ind = cartData.indexOf(decObj);
    if (decObj.quantity > 1) {
      currPrice =
        (decObj.price * decObj.quantity -
          decObj.price * (decObj.quantity - 1)) /
        decObj.quantity;
      decObj.quantity -= 1;
      decObj.price = currPrice * decObj.quantity;
      setOrderList(cartData);
    } else {
      cartData.splice(ind, 1);
    }
  }

  return (
    <ProductContext.Provider
      value={{
        totalAmount: totalAmount,
        orderList,
        setOrderList,
        counter,
        total,
        increamentItem: increamentItem,
        decreamentItem: decreamentItem,
        addToCart: addToCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, Context };
