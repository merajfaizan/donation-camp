import React from "react";
import { Link } from "react-router-dom";

const WideCard = ({ cardDetails }) => {
  const {
    _id,
    picture,
    title,
    category,
    price,
    text_color,
    bg_color,
    category_bg_color,
  } = cardDetails || {};
  return (
    <div
      style={{ backgroundColor: bg_color, color: text_color }}
      className="flex rounded-lg"
    >
      <div className="w-[250px]">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={picture}
          alt=""
        />
      </div>
      <div className="p-6 w-full">
        <p
          style={{ backgroundColor: category_bg_color }}
          className="w-max px-2 rounded-[4px] text-sm "
        >
          {category}
        </p>
        <h1 className="text-black text-2xl font-semibold my-1">{title}</h1>
        <p className="pb-5 font-semibold">${price}.00</p>
        <Link
          to={`/donation/${_id}`}
          style={{ backgroundColor: text_color }}
          className="text-white px-4 py-2 rounded-[4px] inline-block text-lg font-semibold"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default WideCard;
