import React from "react";
import { sna_states as states_2 } from "./sna-state";
import { useEffect } from "react";
import "../tp_pia/map.css";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import Base from "./../../Components/Base";

const Sna_map = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <Base>
      <div className="map">
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
        {states_2.map((state) => (
          <ReactTooltip id={state.id}>
            <span>{state.id}</span>
            <br />
            <span>{state.title}</span>
          </ReactTooltip>
        ))}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          id="svg2"
          height="695.70178"
          width="611.85999"
          style={{ marginTop: "30px" }}
        >
          <defs id="defs42" />
          {states_2.map((state) => (
            <Link to="/log_in">
              <path
                // id={state.id}
                title={state.title}
                fill={state.fill}
                stroke={state.stroke}
                d={state.d}
                data-tip
                data-for={state.id}
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
    </Base>
  );
};

export default Sna_map;
