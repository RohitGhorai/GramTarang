import React from "react";
import Typed from "react-typed";
import "./Home.css";

const Home = () => {
  return (
    <div className="header">
      <center>
        <img
          src="https://amasy.cutmams.in/assets/img/cutm.png"
          style={{ width: "170px" }}
        />
      </center>
      <h1>
        Welcome To Assessment Management System (AMASY) <br></br> of <br></br>
        <Typed
          className="typed-text"
          strings={[
            "Centurion University of Technology &amp; Management (CUTM)",
          ]}
          typeSpeed={50}
          backSpeed={60}
          loop
        />
        <span></span>
      </h1>
      <div className="main">
        <div className="view view-tenth">
          <img src="https://amasy.cutmams.in/images/16.jpg" />
          <div className="mask">
            <h2>TP / PIA Login</h2>
            <p>
              CUTM welcomes New Training Partner / PIA to onboard for assesment
              process, Existing TP / PIA can also login with their respective
              credentials.
            </p>
            <a href="/tp_pia" className="info">
              Choose State
            </a>
          </div>
        </div>
        <div className="view view-tenth">
          <img src="https://amasy.cutmams.in/images/15.jpg" />
          <div className="mask">
            <h2>SNA Login</h2>
            <p>
              State Nodal Agencies (SNA) can login and view respective details
              and process overview of their respective states.
            </p>
            <a href="#" className="info">
              Choose State
            </a>
          </div>
        </div>
        <div className="view view-tenth">
          <img src="https://amasy.cutmams.in/images/14.jpg" />
          <div className="mask">
            <h2>Corporates Login</h2>
            <p>
              CUTM welcomes New Corporate Partner to onboard for assesment
              process, Existing Corporate Partners can also login with their
              respective credentials.
            </p>
            <a href="#" className="info">
              Login Now
            </a>
            &nbsp;
            <a href="#" className="info">
              CNA Login
            </a>
          </div>
        </div>
        <div className="view view-tenth">
          <img src="https://amasy.cutmams.in/images/13.jpg" />
          <div className="mask">
            <h2>Stand Alone Login</h2>
            <p>
              CUTM welcomes New Stand Alone Training Partner to onboard for
              assesment process, Existing Stand Alone Partners can also login
              with their respective credentials.
            </p>
            <a href="#" className="info">
              Login Now
            </a>
            <a href="#" className="info">
              LC/RC LOGIN
            </a>
            <a href="#" className="info">
              SNA LOGIN
            </a>
          </div>
        </div>
        <div className="view view-tenth">
          <img src="https://amasy.cutmams.in/images/17.png" />
          <div className="mask">
            <h2>Centrally Sponsored Schemes</h2>
            <p>
              CUTM welcomes New CSS (Centrally Sponsored Schemes) to onboard for
              assesment process, Existing CSS TP / PIA can also login with their
              respective credentials.
            </p>
            <a href="#" className="info">
              Choose Schemes
            </a>{" "}
            <a href="#" className="info">
              LC/RC LOGIN
            </a>
          </div>
        </div>
        <div className="view view-tenth">
          <img src="https://amasy.cutmams.in/images/12.jpg" />
          <div className="mask">
            <h2>LC / SRC</h2>
            <p>
              Lead Co-ordinators (LC) / State / Regional Co-ordinators can login
              and manage TP / PIA details and process overview of their
              respective states.
            </p>
            <a href="#" className="info">
              Choose State
            </a>
          </div>
        </div>
        <div className="view view-tenth">
          <img src="https://amasy.cutmams.in/images/18.png" />
          <div className="mask">
            <h2>Competency Programs</h2>
            <p>Competency Programs can login and register for various .</p>
            <a href="#" className="info">
              Choose Program
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
