import React from "react";
import Heading from "../common/Heading";
import { blog } from "../apidata/data";

const Blog = () => {
  return (
    <>
      <section className="blog">
        <Heading
          title="Latest Blog Posts"
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <div className="posts">
          {blog.slice(0, 3).map((item) => (
            <div className="post">
              <div className="content">
                <div className="img">
                  <img src={item.cover} alt="Image Loading" />
                </div>
                <div className="text">
                  <button className="button">{item.category}</button>
                  <p>
                    Post Date:
                    <span
                      style={{
                        color: "black",
                        backgroundColor: "orange",
                        borderRadius: "10px",
                      }}
                    >
                      {item.date}
                    </span>
                  </p>
                  <h3>{item.title.slice(0, 36)}...</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
