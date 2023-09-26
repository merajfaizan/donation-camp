import { useEffect, useState } from "react";
import WideCard from "../../components/wideCard/WideCard";

const Donation = () => {
  const [allDoantions, setAllDonations] = useState([]);
  const [showAll, setShowAll] = useState(false);

  // to get local storage data
  useEffect(() => {
    const storedDonations = JSON.parse(localStorage.getItem("all-donations"));
    setAllDonations(storedDonations);
  }, []);

  // toggle the showAll function
  const toggleShowAll = () => {
    setShowAll(true);
  };

  return (
    <div className="grid grid-cols-2 gap-6 mt-16">
      {allDoantions?.length &&
        allDoantions?.slice(0, showAll ? undefined : 4).map((item) => {
          return <WideCard key={item?._id} cardDetails={item} />;
        })}
      <div className="col-span-2 flex justify-center items-center">
        {allDoantions?.length > 4 && !showAll && (
          <button
            className="text-white font-semibold px-5 py-2 mb-10 rounded-lg text-center bg-[#009444]"
            onClick={toggleShowAll}
          >
            Show All
          </button>
        )}
      </div>
    </div>
  );
};

export default Donation;
