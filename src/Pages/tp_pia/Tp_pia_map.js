import React from "react";
import "./Tp_pia.css";
import { states } from "./Tp_pia_state";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Tp_pia_map = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div>
      <div
        className="app-content"
        style={{
          marginLeft: "0px",
          marginTop: "100px",
        }}
      >
        <div
          className="section"
          style={{
            fontSize: "1.75rem",
            fontWeight: "500",
            color: "#4A7296",
          }}
        >
          <center>
            <h3>Please select a state to proceed or hover for more info.</h3>
          </center>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        id="svg2"
        height="695.70178"
        width="611.85999"
      >
        <defs id="defs42" />
        {states.map((state) => (
          <Link to={state.src}>
            <path
              id={state.id}
              title={state.title}
              fill={state.fill}
              stroke={state.stroke}
              d={state.d}
            />
          </Link>
        ))}
      </svg>
      <center>
        <h3>Color Codes</h3>
        <div className="foo red"></div>State Not Opertaional
        <div className="foo green"></div>Portal Fully Operational
        <div className="foo yellow"></div>Portal Under Construction
      </center>
    </div>
  );
};

export default Tp_pia_map;
