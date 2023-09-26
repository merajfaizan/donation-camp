/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const SquareCard = ({ item }) => {
  const {
    _id,
    picture,
    title,
    category,
    text_color,
    bg_color,
    category_bg_color,
  } = item;
  return (
    <Link to={`/donation/${_id}`} className="rounded-lg">
      <img src={picture} alt="card-picture" />
      <div
        style={{
          backgroundColor: bg_color,
          color: text_color,
        }}
        className={` p-3 rounded-b-lg`}
      >
        <p
          style={{ backgroundColor: category_bg_color }}
          className="w-max px-2 rounded-[4px]"
        >
          <span className="text-sm font-medium">{category}</span>
        </p>
        <p className="text-xl font-semibold mt-2">{title}</p>
      </div>
    </Link>
  );
};

export default SquareCard;
