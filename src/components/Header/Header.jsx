import React from "react";
import { useContext } from "react";

import { Link } from "react-router-dom";
import { ProductContext } from "../../Context";

function Header() {
  const { counter, isLoggedIn, setIsLoggedIn } = useContext(ProductContext);

  return (
    <>
      <div className="row">
        <div className="col-3 d-flex justify-content-center align-items-center">
          <Link to="/">
            <img
              src={require("../images/HomePageImages/logo.jpg")}
              className="rounded-circle w-50 mx-5"
              alt=""
            />
          </Link>
          <Link to="/" className="mx-3 h5 text-decoration-none">
            Home
          </Link>
          <Link to="/about" className="mx-3 h5 text-decoration-none">
            About
          </Link>
        </div>
        <div className="col-6 d-flex justify-content-center align-items-center">
          <div className="bg-dark rounded w-100">
            <input type="text" className="w-75 py-2" />
            <i className="fa fa-search text-white  w-25 text-center"></i>
          </div>
        </div>
        <div className="col-3 d-flex justify-content-around  align-items-center">
          <Link to="/products" className="mx-3 h5 text-decoration-none">
            Menu
          </Link>
          <Link to="/cart" className="text-decoration-none">
            <i
              className="fa fa-shopping-cart px-2 btn btn-success"
              style={{ "font-size": "25px" }}
              id="orderCount"
            >
              &nbsp;&nbsp;
              {counter}
            </i>
          </Link>
          <Link to="/orderstatus" className="btn btn-dark">
            Status
          </Link>
         {isLoggedIn ?  <Link to="/" className="btn btn-dark" onClick={(e)=>{e.preventDefault(); setIsLoggedIn(()=>false);}}>
            logout
          </Link> :  <Link to="/login" className="btn btn-dark">
            login
          </Link>}
        </div>
      </div>
    </>
  );
}

export default Header;
