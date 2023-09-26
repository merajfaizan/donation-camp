import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold ">404 Not Found Data</h1>
      <Link className="mt-5 font-semibold" to={"/"}>
        back to home
      </Link>
    </div>
  );
};

export default PageNotFound;
