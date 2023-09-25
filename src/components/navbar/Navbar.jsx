import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Logo.png";

const Navbar = () => {
  let { pathname } = useLocation();
  return (
    <nav className="w-full h-[72px] flex justify-between items-center mt-5">
      <div className="w-max h-full">
        <img className="w-full h-full object-contain" src={logo} alt="logo" />
      </div>
      <ul className="flex justify-center items-center gap-5 text-lg">
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
    </nav>
  );
};

export default Navbar;
