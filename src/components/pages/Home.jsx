import React from "react";
import Product from "./product/Product";
import Card from "./Card";
import Banner from "./Banner";
import TopListProduct from "./TopListProduct";
import PricePlan from "./PricePlan";
import Testimonial from "./Testimonial";
import Blog from "./Blog";

const Home = () => {
  return (
    <>
      <Card />
      <Product />
      <Banner />
      <TopListProduct />
      <PricePlan />
      <Testimonial />
      <Blog />
    </>
  );
};

export default Home;
