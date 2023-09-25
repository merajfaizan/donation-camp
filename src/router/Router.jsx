import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import Donation from "../pages/donation/donation";
import Statistics from "../pages/statistics/Statistics";
import DonationDetails from "../pages/donation/donation-details/DonationDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/donation",
        element: <Donation />,
      },
      {
        path: "/donation/:id",
        element: <DonationDetails />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
    ],
  },
]);

export default router;
