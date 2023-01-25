import React from "react";

function Carousel() {
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src={require("../images/HomePageImages/food1.jpg")}
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={require("../images/HomePageImages/food2.jpg")}
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={require("../images/HomePageImages/food3.jpg")}
              alt="Second slide"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
