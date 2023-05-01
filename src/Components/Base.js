import React from "react";
import Navbar from "./navbar/Navbar";

const Base = ({ title = "Welcome to our website...", children }) => {
  return (
    <div className="container-fluid p-0 m-0">
      <Navbar />
      {children}
    </div>
  );
};

export default Base;
