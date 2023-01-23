import React, { useEffect } from "react";
import "./tp_pia_log_in.css";
import { Link } from "react-router-dom";
import ig1 from "../../Assets/cutmtransparent.png";
import ig2 from "../../Assets/logo-white.png";
import ig3 from "../../Assets/DDU-GKY.png";
import Navbar from "../../Components/navbar/Navbar";

const Tp_pia_log_in = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Navbar />

      <div
        className="card text-center"
        style={{
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
          transition: "0.3s",
          maxWidth: "80%",
          //   maxHeight: "100%",
          borderRadius: "5px",
          backgroundColor: "#466ACD",
          marginTop: "100px",
          marginBottom: "auto",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div
          className="flex-container"
          style={{
            fontSize: "30px",
            textAlign: "center",
            paddingTop: "20px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          <div className="container">
            <div
              className="flex-item-left"
              style={{
                backgroundColor: "transparent",
                padding: "10px",
                fontSize: "large",
              }}
            >
              <img src={ig1} height="80px" margin-left="20px" alt="cutmlogo" />
              <img src={ig2} height="50px" margin-left="20px" alt="logo" />
              <img src={ig3} height="50px" margin-left="20px" alt="logo" />
              <br></br>
              <br></br>
              <br></br>
              <h2 className="body">Assessment Management System</h2>
              <br></br>
              <h5 className="glow font-normal text-white">
                Centurion University of Technology & Management
              </h5>
              <br></br>
              <h5 className="glow font-normal text-white">
                Ranked Within Top 10 Among Young Universities (less than 10
                years since inception) By Outlook
              </h5>

              <p color="white">Need Help With Amasy Portal</p>
              <p color="black">
                &nbsp;|&nbsp;
                <a color="black">FAQ's</a>&nbsp;|&nbsp;
                <a color="black">Documentation</a>&nbsp;|&nbsp;
                <a color="black">Need Help?</a>&nbsp;|&nbsp;
              </p>
              <p color="black">
                &nbsp;|&nbsp;
                <a color="black">Noticeboard</a>&nbsp;|&nbsp;<br></br>
                &nbsp;|&nbsp;
                <a color="black">Terms &amp; Conditions</a>&nbsp;|&nbsp;
                <a color="black">Privacy Policy</a>&nbsp;|&nbsp;
              </p>
            </div>
          </div>
          <div
            className="flex-item-right"
            style={{ backgroundColor: "transparent", padding: "10px" }}
          >
            <div
              className="cardbody_1"
              style={{
                padding: "10px 10px 10px 10px",
                padding: "16px",
                backgroundColor: "rgb(255, 252, 249)",
                // width: "450px",
                maxHeight: "590px",
                borderRadius: "8px",
                color: "#1A3888",
                fontSize: "large",
              }}
            >
              <form style={{ webkitTextSizeAdjust: "100%" }}>
                <h2>Amasy Self Help Portal</h2>
                <input
                  type="text"
                  placeholder="Enter Username"
                  name="uname"
                  required
                  style={{
                    width: "100%",
                    padding: "12px 20px",
                    margin: "8px 0",
                    display: "inline-block",
                    border: "1px solid #ccc",
                    boxSizing: "border-box",
                    borderRadius: "10px",
                  }}
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="psw"
                  required
                  style={{
                    width: "100%",
                    padding: "12px 20px",
                    margin: "8px 0",
                    display: "inline-block",
                    border: "1px solid #ccc",
                    boxSizing: "border-box",
                    borderRadius: "10px",
                  }}
                />
                <select
                  name="role"
                  placeholder="Select Your Scheme"
                  data-search="true"
                  className="form-control"
                  required=""
                >
                  <option value="">Select Scheme</option>
                  <option value="DDUGKY">
                    Deen Dayal Upadhyaya Grameen Kaushalya Yojana - DDUGKY
                  </option>
                </select>
                <br></br>
                <input
                  type="checkbox"
                  data-checkboxes="mygroup"
                  className="custom-control-input"
                  id="checkbox-1"
                  checked=""
                  disabled=""
                />
                &nbsp;
                <label htmlFor="checkbox-1" className="custom-control-label">
                  Keep Me signed in
                </label>
                <Link to="/dashboard">
                  <button
                    className="btn"
                    type="submit"
                    opacity="0.8"
                    style={{
                      backgroundColor: "#1A3888",
                      color: "white",
                      margin: "8px 0",
                      border: "none",
                      cursor: "pointer",
                      width: "90%",
                      borderRadius: "5px",
                      height: "45px",
                    }}
                  >
                    Login
                  </button>
                </Link>
                <p className="mb-2">
                  <a>Forgot Password</a>
                </p>
                <p className="mb-2">
                  <a>Check Login Status</a>
                </p>
                <p className="text-dark mb-0" style={{ fontSize: "15px" }}>
                  Don't have account?
                  <a href=" " className="text-primary ml-1">
                    Sign Up
                  </a>
                </p>
                <p style={{ fontSize: "15px" }}>
                  Don't have an account? Please click below link to register
                  yourself{" "}
                </p>
                <p className="mb-0">
                  <Link
                    to={"/tp_regn_form"}
                    className="font-normal ml-1"
                    style={{ color: "dark", textDecoration: "none" }}
                  >
                    Training Partner on Boarding Application
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Tp_pia_log_in;
