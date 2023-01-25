import React from "react";
import Carousel from "./Carousel";
import Header from "../Header/Header";
import Content from "./Content";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <div className="row flex-column">
        <div className="col">
          <Header />
        </div>
        <div className="col">
          <Carousel />
        </div>
        <div className="col">
          <Content />
        </div>
        <div className="col">
          <Footer />
        </div>
      </div>
    </>
  );
}
