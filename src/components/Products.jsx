import React from "react";
import { foodItems } from "./FoodItems";
import Header from "./Header/Header";
import ProductCard from "./ProductCard/ProductCard";

export default function Products() {
  const curries = foodItems.filter((item) => item.category === "curries");
  const rice = foodItems.filter((item) => item.category === "rice");
  const breads = foodItems.filter((item) => item.category === "bread");
  return (
    <>
      <Header />
      <div className="row ">
        <h4 className="text-center p-2 bg-dark text-white mt-2">
          Top Indian Curries
        </h4>
        {curries.map((data) => (
          <div
            className="col-md-3 my-2 d-flex justify-content-center align-items-center"
            key={data.id}
          >
            <ProductCard
              id={data.id}
              photo={data.image}
              title={data.title}
              price={data.price}
            />
          </div>
        ))}
      </div>
      <div className="row">
        <h4 className="text-center p-2 bg-dark text-white mt-2">
          Top Rice/Biryani
        </h4>
        {rice.map((data) => (
          <div
            className="col-md-3 my-2 d-flex justify-content-center align-items-center"
            key={data.id}
          >
            <ProductCard
              id={data.id}
              photo={data.image}
              title={data.title}
              price={data.price}
            />
          </div>
        ))}
      </div>
      <div className="row">
        <h4 className="text-center p-2 bg-dark text-white mt-2">Top Breads</h4>
        {breads.map((data) => (
          <div
            className="col-md-3 my-2 d-flex justify-content-center align-items-center"
            key={data.id}
          >
            <ProductCard
              id={data.id}
              photo={data.image}
              title={data.title}
              price={data.price}
            />
          </div>
        ))}
      </div>
    </>
  );
}
