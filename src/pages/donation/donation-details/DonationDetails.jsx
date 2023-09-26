import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import swal from "sweetalert";

const DonationDetails = () => {
  const params = useParams();
  const [cardData, setCardData] = useState([]);
  const [allDoantions, setAllDonations] = useState([]);

  // data fetching and finding single data
  useEffect(() => {
    fetch("/donation.json")
      .then((res) => res.json())
      .then((data) => setCardData(data));
  }, []);
  const card = cardData.find((item) => item._id === params.id) || {};

  // to get local storage data
  useEffect(() => {
    const storedDonations = JSON.parse(localStorage.getItem("all-donations"));
    if (storedDonations?.length) {
      setAllDonations(storedDonations);
    }
  }, []);

  // onclick donate donation will set to local storage with prev data and show alert function
  const handleDonate = () => {
    const storedDonations = [...allDoantions, card];
    localStorage.setItem("all-donations", JSON.stringify(storedDonations));
    swal(
      "Thank you for your donation.💖",
      "Your contribution is greatly appreciated",
      "success"
    );
  };

  return (
    <div className="mt-5 ">
      <div className="h-auto md:h-[500px] relative">
        <img
          className="w-full h-full object-cover object-top rounded-lg"
          src={card.picture}
          alt="card-image"
        />
        <div
          className="absolute left-0 bottom-0 w-full h-1/3
          md:h-32 bg-black opacity-50 rounded-b-lg"
        ></div>
        <Link
          style={{ backgroundColor: card.text_color }}
          className="absolute left-24 bottom-3 md:left-10 md:bottom-10 px-4 py-2 rounded-md text-white font-semibold"
          to={""}
          onClick={handleDonate}
        >
          Donate {card.price}$
        </Link>
      </div>
      <div className="my-10">
        <h1 className="text-3xl md:text-[40px] font-bold mb-4">{card.title}</h1>
        <p>{card.details}</p>
      </div>
    </div>
  );
};

export default DonationDetails;
