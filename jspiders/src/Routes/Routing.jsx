import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Components/Layout";
import Register from "../Components/Register";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Qr from "../Components/Qr";
import Feedback from "../Components/Feedback";
import Payment from "../Components/Payment";
import UpdateForm from "../Components/UpdateForm";
import StudentDetails from "../Components/StudentDetails";
import ProfileSection from "../Components/ProfileSection";
import HireFromUs from "../Components/HireFromUs";

let myroutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "/dashboard",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Register />,
      },
      {
        path: "/qr",
        element: <Qr />,
      },
      {
        path: "/feedback",
        element: <Feedback />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/edit details",
        element: <UpdateForm />,
      },
      {
        path: "/studentDetails",
        element: <StudentDetails/>
      },{
        path: "/profile",
        element: <ProfileSection/>  
      },{
        path: "/hireform",
        element: <HireFromUs/>
      }
    ],
  },
]);

const Routing = () => {
  return <RouterProvider router={myroutes}></RouterProvider>;
};

export default Routing;
