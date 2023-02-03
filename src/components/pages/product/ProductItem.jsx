import React, { useState } from "react";
import { AiOutlineClose, AiOutlineHeart } from "react-icons/ai";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { ADD } from "../../../controller/action";

const ProductItem = ({ data }) => {
  const [openImg, setOpenImg] = useState(false);
  const [img, setImg] = useState("");

  // create function
  const onOpenImage = (src) => {
    setImg(src);
    setOpenImg(true);
  };

  const dispatch = useDispatch();

  const addToCart = (e) => {
    dispatch(ADD(e));
  };
  return (
    <>
      <div className="product_items">
        {data.map((item) => (
          <div className="box" key={item.id}>
            <div className="img">
              <img src={item.cover} alt="" />
              <div className="overlay">
                <button className="button">
                  <FiShoppingBag onClick={() => addToCart(item)} />
                </button>
                <button className="button">
                  <AiOutlineHeart />
                </button>
                <button
                  className="button"
                  onClick={() => onOpenImage(item.cover)}
                >
                  <FiSearch />
                </button>
              </div>
            </div>
            <div className="details">
              <h3>{item.title}</h3>
              <p>{item.author}</p>
              <h4>Price:${item.price}</h4>
            </div>
          </div>
        ))}
      </div>

      <div className={openImg ? "modelOpen" : "modelClose"}>
        <div className="onClickImage">
          <img src={img} alt="" />
          <button className="button" onClick={() => setOpenImg(false)}>
            <AiOutlineClose />
          </button>
        </div>
      </div>
    </>
  );
};
export default ProductItem;
