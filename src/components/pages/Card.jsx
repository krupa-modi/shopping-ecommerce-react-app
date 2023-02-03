import React, { useState } from "react";
import SearchItems from "./SearchItems";
import { BiSearch } from "react-icons/bi";
import { hero } from "../apidata/data";
import { products } from "../apidata/data";

const Card = () => {
  const [value, setValue] = useState("");

  const handlerChange = (e) => {
    setValue(e.target.value);
  };

  const handlerSearch = (key) => {
    setValue(key);
  };
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>
            <label>
              Over <span>3500</span> Curated Design
            </label>
            <br />
            <label>
              Resources, <span>Graphic Designing and Websites</span> Templates.
            </label>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
            laborum quibusdam id, enim ab optio eaque, impedit repudiandae eius
            beatae quae aut! Maiores laboriosam quam fugiat non nesciunt.
            Deleniti, veritatis!
          </p>
          <div className="search">
            <span>All categories</span>
            <hr />
            <input
              type="text"
              placeholder="Search Products here..."
              value={value}
              onChange={handlerChange}
            />
            <button onClick={() => handlerSearch(value)}>
              <BiSearch className="searchIcon heIcon" />
            </button>
          </div>
          <SearchItems
            products={products}
            value={value}
            handlerSearch={handlerSearch}
          />
          <p>Like: Images,Theme,Mobile,Laptops etc...</p>
        </div>
      </section>

      {/* for cart */}
      <section className="cards">
        {hero.map((item) => (
          <div className="card" key={item.id}>
            <div className="left">
              <img
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                src={item.cover}
                alt="image loading..."
              />
            </div>
            <div className="right">
              <h4>{item.name}</h4>
              <p>{item.items} items</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Card;
