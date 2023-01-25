import React from "react";
import { Link } from "react-router-dom";

function Content() {
  return (
    <>
      <div id="main" className="my-2">
        <div className="row">
          <div className="col">
            <div style={{ width: "70%", height: "650px" }} className="m-auto">
              <img
                src={require("../images/HomePageImages/hf2.jpg")}
                className="w-100 h-100"
                alt=""
              />
            </div>
          </div>
          <div className="col text-center m-auto">
            <h1 style={{ "font-family": "Pacifico, cursive" }}>
              Feel the taste of Indian Food
            </h1>
            <p>
              India is a hub of spices,deserts,coisines and what not,we provide
              you the all these with the best of the recepies available.Our
              chefs have pure indian background.Plus we prepare our spicies
              without any chemical treatments.
            </p>
            <Link to="/Html/products.html" className="btn btn-primary">
              Explore Menu →
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="col text-center m-auto">
            <h1 style={{ "font-family": "Pacifico, cursive" }}>
              Our motive is to bring true Indian flavours to you
            </h1>
            <p>
              India is a hub of spices,deserts,coisines and what not,we provide
              you the all these with the best of the recepies available.Our
              chefs have pure indian background.Plus we prepare our spicies
              without any chemical treatments.
            </p>
            <Link to="/Html/products.html" className="btn btn-primary">
              Explore Menu →
            </Link>
          </div>
          <div className="col">
            <div style={{ width: "70%", height: "650px" }} className="m-auto">
              <img
                src={require("../images/HomePageImages/hf4.jpg")}
                className="w-100 h-100"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col">
            <div style={{ width: "70%", height: "650px" }} className="m-auto">
              <img
                src={require("../images/HomePageImages/hf1.jpg")}
                className="w-100 h-100"
                alt=""
              />
            </div>
          </div>
          <div className="col text-center m-auto">
            <h1 style={{ "font-family": "Pacifico, cursive" }}>
              We Provide Eco-Friendly Packaging
            </h1>
            <p>
              India is a hub of spices,deserts,coisines and what not,we provide
              you the all these with the best of the recepies available.Our
              chefs have pure indian background.Plus we prepare our spicies
              without any chemical treatments.
            </p>
            <Link to="/Html/products.html" className="btn btn-primary">
              Explore Menu →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
