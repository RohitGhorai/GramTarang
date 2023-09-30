import React from "react";
import StudentTable from "./StudentTable";
import Profile from "../../../Assets/profile.png";
import { Button } from "react-bootstrap";
import { useState } from "react";

const studentInfo = [
  {
    title: "Regd No.",
    type: "text",
    disabled: true,
    value: "------------------",
  },
  {
    title: "Candidates MPR ID",
    type: "text",
    disabled: true,
    value: "------------------",
  },
  {
    title: "Candidate SNA ID",
    type: "text",
    disabled: true,
    value: "------------------",
  },
  {
    title: "Photo",
    type: "upload",
    disabled: true,
    value: (
      <div
        style={{
          backgroundImage: `url(${Profile})`,
          backgroundSize: "cover",
          width: "100px",
          height: "100px",
        }}
      />
    ),
  },
  {
    title: "Candidate Name",
    type: "text",
    disabled: true,
    value: "------------------",
  },
  {
    title: "Father Name",
    type: "text",
    disabled: true,
    value: "------------------",
  },
];
const buttonColor = {
  cursor: "pointer",
  border: "none",
  fontWeight: "bold",
  fontSize: "18px",
  boxShadow:
    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
};
const Pay = () => {
  const [hover, setHover] = useState(false);
  const [color, setColor] = useState(false);
  return (
    <div className="d-flex flex-column">
      <StudentTable heading={"Student Data"} students={studentInfo} />
      <div className="card w-100 p-0">
        <button
          className="p-2 text-center rounded"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={
            !hover
              ? { background: "#0067B3", color: "#fff", ...buttonColor }
              : { background: "#7EC8E3", color: "blue", ...buttonColor }
          }
        >
          Request for Edit
        </button>
        <button
          className="p-2 mt-1 text-center rounded"
          onMouseEnter={() => setColor(true)}
          onMouseLeave={() => setColor(false)}
          style={
            color
              ? { background: "#00D100", color: "#0A7029", ...buttonColor }
              : { background: "#0A7029", color: "#fff", ...buttonColor }
          }
        >
          Confirm & Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default Pay;
