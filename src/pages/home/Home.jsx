import SquareCard from "../../components/squareCard/SquareCard";
import { useEffect, useState } from "react";

const Home = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetch("/donation.json")
      .then((res) => res.json())
      .then((data) => setCardData(data));
  }, []);

  const [search, setSearch] = useState("");

  const handleSubmit = () => {
    event.preventDefault();

    const data = cardData.filter((item) => {
      const category = item.category;
      return category.toLowerCase() == search.toLowerCase();
    });
    setCardData(data);
  };

  return (
    <main className=" h-[500px]">
      <section className="home relative flex flex-col justify-center items-center h-[500px]">
        <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-[0.95]"></div>
        <h1 className="text-3xl text-center md:text-5xl font-bold z-10">
          I Grow By Helping People In Need
        </h1>
        <form className="relative flex w-full md:w-[470px] h-12 mt-10">
          <input
            onChange={() => setSearch(event.target.value)}
            className="w-full outline-none border border-gray rounded-lg p-2"
            type="text"
            name="search"
            id="category"
            placeholder="Search here..."
          />
          <input
            onClick={handleSubmit}
            className="absolute w-max h-full right-0 rounded-e-lg px-7 bg-primary-color text-white font-semibold cursor-pointer"
            type="submit"
            value="Search"
          />
        </form>
      </section>
      <section className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.map((item) => {
          return <SquareCard key={item._id} item={item} />;
        })}
      </section>
    </main>
  );
};

export default Home;
