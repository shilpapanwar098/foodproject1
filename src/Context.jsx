import React, { createContext } from "react";
import { useState } from "react";
import App from "./App";
import { foodItems } from "./components/FoodItems";

const ProductContext = createContext({});

const Root = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const [orderList, setOrderList] = useState([]);
  const [total, setTotal] = useState(0);
  const [loginCredentials,setLoginCredentials] = useState([{
    id: "mail@example.com",
    password: "shilpa123"
  }]);
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [searchText,setSearchText] = useState("");

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

    currPrice = incObj.price/ (incObj.quantity);
    incObj.quantity += 1;

      // (incObj.price * incObj.quantity - incObj.price * (incObj.quantity - 1)) /
      // (incObj.quantity - 1);
    incObj.price = currPrice * incObj.quantity;

    setOrderList(cartData);
  }

  function decreamentItem(id) {
    let decObj = cartData.find((element) => element.id == id);
    let ind = cartData.indexOf(decObj);
    if (decObj.quantity > 1) {
      currPrice = decObj.price / decObj.quantity;
        // (decObj.price * decObj.quantity -
        //   decObj.price * (decObj.quantity - 1)) /
        // decObj.quantity;
      decObj.quantity -= 1;
      decObj.price = currPrice * decObj.quantity;
      setOrderList(cartData);
    } else {
      cartData.splice(id, 1);
    }
  }


  return (
    <ProductContext.Provider
      value={{
        totalAmount: totalAmount, // function to calc total amount
        orderList, 
        setOrderList, 
        counter,
        total, 
        increamentItem: increamentItem,
        decreamentItem: decreamentItem,
        addToCart: addToCart,
        loginCredentials,
        setLoginCredentials,
        isLoggedIn,
        setIsLoggedIn,
        searchText,
        setSearchText
      }}
    >
      {children}
   </ProductContext.Provider>


  );
};

export { ProductContext, Root };
