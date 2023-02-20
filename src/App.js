import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Products from "./components/Products";
import Cart from "./components/Cart/Cart";
import OrderStatus from "./components/OrderStatus";
import Login from "./components/Login/Login";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/orderstatus" element={<OrderStatus />}></Route>
          <Route exact path="/products" element={<Products />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/" element={<Home val={20} value2={50} shilpa={4278}/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
