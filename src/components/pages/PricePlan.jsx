import React from "react";
import Heading from "../common/Heading";
import { price } from "../apidata/data";

const PricePlan = () => {
  return (
    <>
      <section className="price">
        <Heading
          title="Choose Your Plan"
          desc="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.."
        />
        <div className="content">
          {price.map((item) => (
            <div className="box">
              <h3>{item.name}</h3>
              <h1>
                <span>$</span>
                {item.price}
                <label>/per month</label>
              </h1>
              <p>{item.desc}</p>
              <button className="button">GET START</button>

              <ul>
                {item.list.map((lists) => (
                  <li>
                    <i>{lists.icon}</i>
                    <span>{lists.para}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default PricePlan;
