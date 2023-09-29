import React, { useState } from "react";
import { FaRegFileExcel } from "react-icons/fa";
import Table from "../Table";
import { Link } from "react-router-dom";
import { NavLink } from "react-bootstrap";
import UploadBatch from "./UploadBatch";

const steps = [
  "1. Download Sample Template From The Link Provided",
  "2. Fill in the file with appropriate data",
  "3. Click Upload Next to the ABN No you have generated",
  "4. You will be redirected to uploading page",
  '5. Click Upload Button and Upload File and Wait For The Message "Batch Data uploaded successfully".',
  "You are done!",
];
const styles = {
  smText: {
    fontSize: "14px",
    fontStyle: "Italic",
  },
  button: {
    backgroundColor: "green",
    hoverBackgroundColor: "yellow",
    color: "white",
    fontSize: "14px",
    fontStyle: "Italic",
    border: "none",
  },
  buttonHover: {
    backgroundColor: "yellow",
    color: "green",
    fontSize: "14px",
    fontStyle: "Italic",
    border: "none",
  },
  heading: {
    margin: "1em",
    fontWeight: "bold",
    color: "#4d207d",
  },
  fileStyle: {
    display: "visible",
    display: "inline-block",
    padding: "5px 15px",
    cursor: "pointer",
    backgroundColor: "lightblue",
    borderRadius: "5px",
    width: "100%",
  },
};
const AddBatch = () => {
  const [hover, setHover] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const tableHeader = [
    { title: "ABN No.", value: "--------------------------------" },
    { title: "Center Project ID", value: "--------------------------------" },
    { title: "Center Name", value: "--------------------------------" },
    { title: "Batch ID", value: "--------------------------------" },
    {
      title: "Upload Excel",
      value: (
        <>
          <NavLink
            className="fs-5 text-center text-primary fw-bold"
            onClick={() => setModalShow(true)}
          >
            <span style={{ fontSize: "16px" }}>Upload</span>
          </NavLink>
          <UploadBatch
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </>
      ),
    },
  ];
  return (
    <div className="card" style={{ height: "100%", width: "100%" }}>
      <span className="text-center" style={styles.heading}>
        Your List of Approved Centers with ABN Assigned
      </span>
      <div
        className="container"
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div>
          <span style={styles.heading}>
            Steps to upload bulk upload file method
          </span>
          <ul style={{ listStyleType: "disc;", marginTop: "10px" }}>
            {steps.map((step, index) => (
              <li key={index} style={styles.smText}>
                {step}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ marginTop: "20px" }}>
          <button
            type="submit"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={hover ? styles.buttonHover : styles.button}
          >
            <FaRegFileExcel size={17} />
            &nbsp; Download Batch Excel Template
          </button>
        </div>
      </div>
      <div className="card" style={{ width: "100%" }}>
        <Table
          items={tableHeader}
          heading="Particulars of the All ABN Generated"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        />
      </div>
    </div>
  );
};

export default AddBatch;
