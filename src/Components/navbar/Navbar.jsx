import React from "react";
import Logo from "../../Assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  // window.addEventListener("scroll", () => {
  //   document
  //     .querySelector("nav", "nav-item")
  //     .classList.toggle("window-scroll", window.scrollY > 0);
  // });
  // const navbar = document.querySelector(".nav", "navbar-toggler");
  // window.onscroll = () => {
  //   if (window.scrollY >= 0) {
  //     navbar.classList.add("fixed-top");
  //   } else {
  //     navbar.classList.remove("fixed-top");
  //   }
  // };
  return (
    <nav id="navbar" className="navbar navbar-expand-lg fixed-top" style={{backgroundColor: " #000000c1", maxHeight: "3.875rem"}}>
      <div className="container navbar">
        <a className="header-brand" href="#">
          <img className="logo" src={Logo} alt="Logo..." />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon
            icon={faBars}
            style={{ marginTop: "0", color: "#fff" }}
          />
        </button>

        <div
          className="collapse navbar-collapse text-center"
          style={
            {
              // marginLeft: "30%",
              // marginRight: "20%",
            }
          }
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                about
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
