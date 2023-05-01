import React from "react"
import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../authentication";
import PrivateSection from "./PrivateSection";

const PrivateRoute = () => {
  return isLoggedIn() ? <PrivateSection /> : <Navigate to="/" />;
};

export default PrivateRoute;
