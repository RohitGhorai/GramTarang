import React from "react";
import Base from "./../Components/Base";
import { useContext, useEffect, useState } from "react";
import userContext from "./../context/userContext";
import { useNavigate } from "react-router-dom";
import ig1 from "../Assets/cutmtransparent.png";
import ig2 from "../Assets/logo-white.png";
import ig3 from "../Assets/DDU-GKY.png";
import { Link } from "react-router-dom";
import "./login.css";
import { toast } from "react-toastify";
import { loginUser } from "../services/user-service";
import { doLogin } from "../authentication";
import { Card, Form } from "react-bootstrap";

export default function Login(props) {
  const { user, setUser } = useContext(userContext);
  const navigate = useNavigate();
  const [loginDetail, setLoginDetail] = useState({
    userName: "",
    password: "",
  });
  const [error, setError] = useState({
    errors: [],
    isError: false,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setLoginDetail({ ...loginDetail, [field]: actualValue });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(loginDetail);
    if (
      loginDetail.userName.trim() === "" ||
      loginDetail.password.trim() === ""
    ) {
      toast.error("Username or password is required !!");
      return;
    }
    loginUser(loginDetail)
      .then((userData) => {
        console.log(userData);
        doLogin(userData, () => {
          console.log("User details saved in local storage !!");
          setUser({
            srcUser: userData.srcUser,
            tpUser: userData.tpUser,
            login: true,
          });
          console.log(user);
          navigate("/dashboard");
        });
        toast.success("Login successful !!");
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 400 || error.response.status === 404) {
          toast.error(error.response.data.message);
        } else {
          toast.error(
            "Something went wrong on server. Please try again later."
          );
        }
      });
  };
  return (
    <Base>
      <Card
        {...props}
        className="text-center"
        style={{
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
          transition: "0.3s",
          maxWidth: "70%",
          maxHeight: "100%",
          borderRadius: "5px",
          backgroundColor: "#466ACD",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
          overflow: "hidden",
        }}
      >
        <Card.Body
          className="flex-container"
          style={{
            fontSize: "30px",
            textAlign: "center",
            paddingTop: "20px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          <div className="card-container">
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
              <img
                src={ig3}
                height="50px"
                margin-left="20px"
                alt="DDU-GKY_logo"
              />
              <br></br>
              <br></br>
              <br></br>
              <h2 className="body text-warning">
                Assessment Management System
              </h2>
              <br></br>
              <h5 className="glow font-normal text-white">
                Centurion University of Technology & Management
              </h5>
              <br></br>
              <h5 className="glow font-normal text-white">
                Ranked Within Top 10 Among Young Universities (less than 10
                years since inception) By Outlook
              </h5>

              <p className="text-dark">Need Help With Amasy Portal</p>
              <p className="text-dark">
                &nbsp;|&nbsp;
                <a className="text-dark text-decoration-none">FAQ's</a>
                &nbsp;|&nbsp;
                <a className="text-dark text-decoration-none">Documentation</a>
                &nbsp;|&nbsp;
                <a className="text-dark text-decoration-none">Need Help?</a>
                &nbsp;|&nbsp;
              </p>
              <p color="black">
                &nbsp;|&nbsp;
                <a className="text-dark text-decoration-none">Noticeboard</a>
                &nbsp;|&nbsp;<br></br>
                &nbsp;|&nbsp;
                <a className="text-dark text-decoration-none">
                  Terms &amp; Conditions
                </a>
                &nbsp;|&nbsp;
                <a className="text-dark text-decoration-none">Privacy Policy</a>
                &nbsp;|&nbsp;
              </p>
            </div>
          </div>
          <div
            className="flex-container"
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
            <div
              className="flex-item-right"
              style={{
                backgroundColor: "transparent",
                padding: "10px",
                overflow: "hidden",
              }}
            >
              <Form onSubmit={handleSubmit}>
                <h2>Amasy Self Help Portal</h2>
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="mt-4"
                  name="uname"
                  required
                  value={loginDetail.userName}
                  onChange={(event) => handleChange(event, "userName")}
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
                  value={loginDetail.password}
                  onChange={(event) => handleChange(event, "password")}
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
                <button
                  className="btn mt-4"
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
              </Form>
              <p className="mb-2">
                <a>Forgot Password</a>
              </p>
              <p className="mb-2">
                <a>Check Login Status</a>
              </p>
              {/* <p className="text-dark mb-0" style={{ fontSize: "15px" }}>
                Don't have account?
                <a href=" " className="text-primary ml-1">
                  Sign Up
                </a>
              </p> */}
              <p style={{ fontSize: "15px" }}>
                Don't have an account? Please click below link to register
                yourself{" "}
              </p>
              <p className="mb-0">
                <Link
                  to={"/tp_regn_form"}
                  className="font-normal ml-1 text-primary text-decoration-none"
                >
                  Training Partner on Boarding Application
                </Link>
              </p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Base>
  );
}
