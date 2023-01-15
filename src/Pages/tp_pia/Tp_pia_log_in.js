import React from "react";
import "./tp_pia_log_in.css";
import { Link } from "react-router-dom";
import ig1 from "../Assets/cutmtransparent.png";
import ig2 from "../Assets/logo-white.png";
import ig3 from "../Assets/DDU-GKY.png";
import { useEffect } from "react";

const tp_pia_log_in = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div class="card">
        <div class="flex-container">
          <div class="container">
            <div class="flex-item-left">
              <img src={ig1} height="50px" margin-left="-20px" alt="cutmlogo" />
              <img src={ig2} height="50px" margin-left="20px" alt="logo" />
              <img src={ig3} height="50px" margin-left="20px" alt="logo" />
              <br></br>
              <br></br>
              <br></br>
              <h2 class="body">Assessment Management System</h2>
              <br></br>
              <h5 class="glow">
                Centurion University of Technology & Management
              </h5>
              <br></br>
              <h5 class="glow">
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
          <div class="flex-item-right">
            <div class="cardbody">
              <form>
                <h2>Amasy Self Help Portal</h2>

                <input
                  type="text"
                  placeholder="Enter Username"
                  name="uname"
                  required
                />

                <input
                  type="password"
                  placeholder="Enter Password"
                  name="psw"
                  required
                />
                <select
                  name="role"
                  placeholder="Select Your Scheme"
                  data-search="true"
                  class="form-control"
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
                  class="custom-control-input"
                  id="checkbox-1"
                  checked=""
                  disabled=""
                />
                <label for="checkbox-1" class="custom-control-label">
                  Keep Me signed in
                </label>

                <button type="submit">Login</button>
                <Link to="/particulars" className="info">
                  Choose State
                </Link>

                <p class="mb-2">
                  <a>Forgot Password</a>
                </p>
                <p class="mb-2">
                  <a>Check Login Status</a>
                </p>
                <p class="text-dark mb-0">
                  Don't have account?
                  <a href=" " class="text-primary ml-1">
                    Sign Up
                  </a>
                </p>
                <br></br>
                <p>
                  Don't have an account? Please click below link to register
                  yourself{" "}
                </p>
                <p class="text-dark mb-0">
                  <a class="text-pimary ml-1">
                    Training Partner on Boarding Application
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default tp_pia_log_in;
