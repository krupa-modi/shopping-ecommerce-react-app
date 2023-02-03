import React, { useState } from "react";
import Heading from "../common/Heading";
import ProductItem from "./product/ProductItem";
import { topProducts } from "../apidata/data";

const TopListProduct = () => {
  const [data, setData] = useState(topProducts);
  const allcategories = ["all", ...new Set(data.map((item) => item.category))];
  const [category, setCategory] = useState(allcategories);
  //   console.log("category", category);

  const handlerFilter = (category) => {
    const newItem = topProducts.filter((item) => item.category === category);
    setData(newItem);

    if (category === "all") {
      setData(topProducts);
      return;
    }
  };
  return (
    <>
      <section className="topproduct">
        <div className="container">
          <div className="head">
            <Heading
              title="Top Selling Products"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget dapibus augue, eget vestibulum libero. Nullam in convallis magna, sed luctus neque. Mauris euismod posuere orci et malesuada."
            />
            <div className="category">
              {category.map((category) => (
                <button
                  className="button"
                  onClick={() => handlerFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <ProductItem data={data} />
        </div>
      </section>
    </>
  );
};

export default TopListProduct;
