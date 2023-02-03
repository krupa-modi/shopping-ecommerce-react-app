import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FiSearch, FiShoppingBag } from "react-icons/fi";

const SearchItems = ({ value, products, handlerSearch }) => {
  return (
    <>
      <section className="searchItems">
        <div className="product_items">
          {products 
            .filter((item) => {
              const searchKey = value.toLowerCase();
              const title = item.title.toLowerCase();

              return (
                searchKey && title.startsWith(searchKey) && title !== searchKey
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div className="box" key={item.id}>
                <div className="img">
                  <img src={item.cover} alt="" />
                  <div className="overlay">
                    <button className="button">
                      <FiShoppingBag />
                    </button>
                    <button className="button">
                      <AiOutlineHeart />
                    </button>
                    <button className="button">
                      <FiSearch />
                    </button>
                  </div>
                </div>
                <div className="details">
                  <h3>{item.title}</h3>
                  <p>{item.author}</p>
                  <h4>Price:{item.price}</h4>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default SearchItems;
