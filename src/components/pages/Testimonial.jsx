import React from "react";
import { ImQuotesRight } from "react-icons/im";
import Heading from "../common/Heading";
import { customer } from "../apidata/data";

const Testimonial = () => {
  return (
    <>
      <section className="customer">
        <Heading
          title="Choose Your Plan"
          desc="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.."
        />
        <div className="content">
          {customer.map((item) => (
            <div className="card">
              <button>
                <ImQuotesRight />
              </button>
              <p>"{item.desc}"</p>
              <h3>{item.name}</h3>
              <span>{item.post}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Testimonial;
