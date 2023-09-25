/* eslint-disable react/prop-types */
const SquareCard = ({ item }) => {
  const { picture, title, category, text_color, bg_color, category_bg_color } =
    item;
  return (
    <div className="rounded-lg">
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
    </div>
  );
};

export default SquareCard;
