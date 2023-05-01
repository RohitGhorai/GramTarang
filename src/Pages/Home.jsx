import React from "react";
import video1 from "../Assets/video1.mp4";
import "./Home.css";
import { Link } from "react-router-dom";
import Base from "../Components/Base";
import tp from "../Assets/tp_pia.jpg";
import cp from "../Assets/cp.jpg";
import css from "../Assets/css_login.jpg";
import standard from "../Assets/standard.jpg";
import src from "../Assets/src_login.jpg";
import corporate from "../Assets/corporate.jpg";
import sna from "../Assets/sna_login.jpg";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <Base>
      <div className="container">
        <video
          className="d-block w-100"
          src={video1}
          autoPlay={true}
          loop
          muted
        />
        <div className="main">
          <div className="view view-tenth">
            <img src={tp} />
            <div className="mask">
              <h2>TP / PIA Login</h2>
              <p>
                CUTM welcomes New Training Partner / PIA to onboard for
                assessment process, Existing TP / PIA can also login with their
                respective credentials.
              </p>
              {/* <Link to="/tp_pia_map"> */}
              <Link to="/tp_pia_map" className="info">
                Choose State
              </Link>
              {/* </Link> */}
            </div>
          </div>
          <div className="view view-tenth">
            <img src={sna} />
            <div className="mask">
              <h2>SNA Login</h2>
              <p>
                State Nodal Agencies (SNA) can login and view respective details
                and process overview of their respective states.
              </p>
              <Link to="/sna_map" className="info">
                Choose State
              </Link>
            </div>
          </div>
          <div className="view view-tenth">
            <img src={corporate} />
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
            <img src={standard} />
            <div className="mask">
              <h2>Stand Alone Login</h2>
              <p>
                CUTM welcomes New Stand Alone Training Partner to onboard for
                assessment process, Existing Stand Alone Partners can also login
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
            <img src={css} />
            <div className="mask">
              <h2>Centrally Sponsored Schemes</h2>
              <p>
                CUTM welcomes New CSS (Centrally Sponsored Schemes) to onboard
                for assesment process, Existing CSS TP / PIA can also login with
                their respective credentials.
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
            <img src={src} />
            <div className="mask">
              <h2>LC / SRC</h2>
              <p>
                Lead Co-ordinators (LC) / State / Regional Co-ordinators can
                login and manage TP / PIA details and process overview of their
                respective states.
              </p>
              <a href="#" className="info">
                Choose State
              </a>
            </div>
          </div>
          <div className="view view-tenth">
            <img src={cp} />
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
    </Base>
  );
}

export default Home;
