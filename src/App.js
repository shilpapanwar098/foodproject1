import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Products from "./components/Products";
import Cart from "./components/Cart/Cart";
import OrderStatus from "./components/OrderStatus";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/orderstatus" element={<OrderStatus />}></Route>
          <Route exact path="/products" element={<Products />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
