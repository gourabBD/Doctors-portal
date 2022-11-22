import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../LayOut/DashboardLayout";
import Main from "../LayOut/Main";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddDoctor from "../Pages/Dashboard/Dashboard/AddDoctor/AddDoctor";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import ManageDoctors from "../Pages/Dashboard/Dashboard/ManageDoctors/ManageDoctors";
import Payment from "../Pages/Dashboard/Dashboard/Payment/Payment";
import MyAppointment from "../Pages/Dashboard/MyAppointment/MyAppointment";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import DisplayError from "../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../Pages/SignUp/SignUp";

import Appointment from "./../Pages/Appointment/Appointment/Appointment";
import AdminRoute from "./AdminRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/dashboard",
        element: <MyAppointment></MyAppointment>,
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/adddoctor",
        element: (
          <AdminRoute>
            <AddDoctor></AddDoctor>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/managedoctors",
        element: (
          <AdminRoute>
            <ManageDoctors></ManageDoctors>{" "}
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: (
         
            <Payment></Payment>
          
        ),
        loader: ({ params }) =>
          fetch(
            `https://doctors-portal-server-tau-lilac.vercel.app/bookings/${params.id}`
          ),
      },
    ],
  },
]);
export default router;
