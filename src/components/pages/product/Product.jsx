import React, { useState } from "react";
import Heading from "../../common/Heading";
import ProductItem from "./ProductItem";
import { products } from "../../apidata/data";

const Product = () => {
  const [data, setData] = useState(products);
  //   console.log("setData", setData);

  return (
    <>
      <section className="product">
        <div className="container">
          <Heading
            title="Trending Products"
            desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour. "
          />
          <ProductItem data={data} />
        </div>
      </section>
    </>
  );
};

export default Product;
