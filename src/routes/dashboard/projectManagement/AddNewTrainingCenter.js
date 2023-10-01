import React, { useEffect, useState } from "react";
import Table from "../Table";
import { Button } from "react-bootstrap";
import { affiliationInfo } from "./Affiliated";

const table = [
  {
    title: "Amasy UID",
    type: "text",
    disabled: false,
    value: "-----------------",
  },
  {
    title: "Center ID",
    type: "text",
    disabled: false,
    value: "-----------------",
  },
  {
    title: "Center Name",
    type: "text",
    disabled: false,
    value: "-----------------",
  },
  {
    title: "Scheme",
    type: "text",
    disabled: false,
    value: "-----------------",
  },
  {
    title: "Scheme",
    type: "text",
    disabled: false,
    value: "-----------------",
  },
  {
    title: "Project ID",
    type: "text",
    disabled: false,
    value: "-----------------",
  },
];
const flexBox = {
  width: "90%",
  display: "flex",
  justifyContent: "space-between",
};
const length = affiliationInfo.SSC.length;

const AddNewTrainingCenter = () => {
  const [mobileView, setMobileView] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 856) setMobileView(true);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className="card w-100 h-100 mt-3 d-flex flex-column"
      style={{
        borderColor: "#fff",
        alignItems: "center",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
    >
      <Table
        heading={"Add New Training Center"}
        items={table}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      />
      <span className="mt-5 fs-4 fw-bold">
        Affiliation / Accreditation Details
      </span>
      <div
        className="mt-5"
        style={{
          ...flexBox,
          flexDirection: !mobileView ? "row" : "column",
          alignItems: !mobileView ? "center" : "start",
        }}
      >
        <div>
          {affiliationInfo.Affiliated.map((aff, i) => (
            <div>
              <input
                className="form-check-input"
                type="checkbox"
                key={i}
                id="flexCheckChecked"
                style={{ marginRight: "5px" }}
              />
              <label className="p-0" for="flexCheckChecked">
                {aff.title}
              </label>
            </div>
          ))}
          <div className="fw-bold mt-4 mb-2">
            <span>SSC</span>
          </div>
          {affiliationInfo.SSC.slice(0, 8).map((ssc, i) => (
            <div className={(i === 7) && "mb-4"}>
              <input
                className="form-check-input"
                type="checkbox"
                key={i}
                id="flexCheckChecked"
                style={{ marginRight: "5px" }}
              />
              <label className="p-0" for="flexCheckChecked">
                {ssc.title}
              </label>
            </div>
          ))}
        </div>
        <div>
          <div className="fw-bold mb-2">
            <span>SSC</span>
          </div>
          {affiliationInfo.SSC.slice(8, 23).map((ssc, i) => (
            <div className={i === 14 && "pb-4"}>
              <input
                className="form-check-input"
                type="checkbox"
                key={i}
                id="flexCheckChecked"
                style={{ marginRight: "5px" }}
              />
              <label className="p-0" for="flexCheckChecked">
                {ssc.title}
              </label>
            </div>
          ))}
        </div>
        <div>
          <div className="fw-bold mb-2">
            <span>SSC</span>
          </div>
          {affiliationInfo.SSC.slice(23, length).map((ssc, i) => (
            <div>
              <input
                className="form-check-input"
                type="checkbox"
                key={i}
                id="flexCheckChecked"
                style={{ marginRight: "5px" }}
              />
              <label className="p-0" for="flexCheckChecked">
                {ssc.title}
              </label>
            </div>
          ))}
        </div>
      </div>
      <Button
        className="w-100 btn mt-3 text-white border-danger"
        variant="warning"
      >
        Add Affiliation / Accreditation
      </Button>
    </div>
  );
};

export default AddNewTrainingCenter;
