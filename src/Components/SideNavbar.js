import React from "react";
import "./SideNavbar.css";
import { Link } from "react-router-dom";

const SideNavbar = () => {
  var li_items = document.querySelectorAll(".sidebar ul li");

  li_items.forEach((li_item) => {
    li_item.addEventListener("mouseenter", () => {
      li_item.closest(".wrapper").classList.remove("hover-collapse");
    });
  });
  // li_items.forEach((li_item) => {
  //   li_item.addEventListener("mouseleave", () => {
  //     li_item.closest(".wrapper").classList.add("hover-collapse");
  //   });
  // });
  //   hamburger.addEventListener("click", () => {
  //     hamburger.closest(".wrapper").classList.toggle("hover_collapse");
  //   });
  return (
    <div className="wrapper hover-collapse fixed-left">
      <div className="sidebar">
        <div className="sidebar-inner">
          <ul>
            <li>
              <a href="#">
                <span className="icon">
                  <i className="fa fa-qrcode"></i>
                </span>
                <span className="text">Batch Approval</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <i className="fa fa-eye"></i>
                </span>
                <span className="text">Center Approval</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <i className="fa fa-user-check"></i>
                </span>
                <span className="text">pending</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <i className="fa fa-book"></i>
                </span>
                <span className="text">Generate Report</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
