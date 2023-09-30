import React from "react";
import StudentData from "./StudentTable";
import Profile from "../../../Assets/profile.png";

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
    title: "Upload Photo",
    type: "upload",
    disabled: false,
    value: (
      <div style={{ background: "#fbc309", color: "#fff" }}>
        <input type="file" />
      </div>
    ),
  },
];

const UploadPhoto = () => {
  return (
    <>
      <StudentData heading={"Upload Photo"} students={studentInfo} />
    </>
  );
};

export default UploadPhoto;
