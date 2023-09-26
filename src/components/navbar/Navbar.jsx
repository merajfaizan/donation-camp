import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Logo.png";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  let { pathname } = useLocation();
  const [showNab, setShowNab] = useState(false);
  return (
    <nav className="w-full h-[72px] flex justify-between items-center mt-5">
      <div className="w-max h-full">
        <img className="w-full h-full object-contain" src={logo} alt="logo" />
      </div>
      {/* desktop nav */}
      <ul className="hidden md:flex justify-center items-center gap-5 text-lg">
        <Link
          className={`${
            pathname == "/"
              ? "text-primary-color border-b font-bold"
              : "text-black"
          } hover:text-primary-color hover:border-b hover:border-primary-color hover:font-bold`}
          to={"/"}
        >
          <li>Home</li>
        </Link>
        <Link
          className={`${
            pathname == "/donation"
              ? "text-primary-color border-b font-bold"
              : "text-black"
          } hover:text-primary-color hover:border-b hover:border-primary-color hover:font-bold`}
          to={"/donation"}
        >
          <li>Donation</li>
        </Link>
        <Link
          className={`${
            pathname == "/statistics"
              ? "text-primary-color border-b font-bold"
              : "text-black"
          } hover:text-primary-color hover:border-b hover:border-primary-color hover:font-bold`}
          to={"/statistics"}
        >
          <li>Statistics</li>
        </Link>
      </ul>
      {/* mobile nav */}
      <div className="md:hidden" onClick={() => setShowNab((prev) => !prev)}>
        <AiOutlineMenu className="text-3xl font-bold" />
      </div>
      {showNab && (
        <ul className="md:hidden absolute top-24 bg-white border border-gray rounded-lg right-5 z-50 flex flex-col gap-5 text-lg p-5">
          <Link
            onClick={() => setShowNab((prev) => !prev)}
            className={`${
              pathname == "/"
                ? "text-primary-color border-b font-bold"
                : "text-black"
            } hover:text-primary-color hover:border-b hover:border-primary-color hover:font-bold`}
            to={"/"}
          >
            <li>Home</li>
          </Link>
          <Link
            onClick={() => setShowNab((prev) => !prev)}
            className={`${
              pathname == "/donation"
                ? "text-primary-color border-b font-bold"
                : "text-black"
            } hover:text-primary-color hover:border-b hover:border-primary-color hover:font-bold`}
            to={"/donation"}
          >
            <li>Donation</li>
          </Link>
          <Link
            onClick={() => setShowNab((prev) => !prev)}
            className={`${
              pathname == "/statistics"
                ? "text-primary-color border-b font-bold"
                : "text-black"
            } hover:text-primary-color hover:border-b hover:border-primary-color hover:font-bold`}
            to={"/statistics"}
          >
            <li>Statistics</li>
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
