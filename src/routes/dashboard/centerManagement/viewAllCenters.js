import React from "react";
import "./center.css";
import { useEffect } from "react";
import { Button } from "bootstrap";
import Table from "../Table";

const tableData = [
  {
    title: "Amasy UID",
    type: "text",
    disabled: true,
    value: "---------------",
  },
  {
    title: "Center ID",
    type: "text",
    disabled: true,
    value: "---------------",
  },
  {
    title: "Center Name",
    type: "text",
    disabled: true,
    value: "---------------",
  },
  { title: "Scheme", type: "text", disabled: true, value: "---------------" },
  {
    title: "Project ID",
    type: "text",
    disabled: true,
    value: "---------------",
  },
  {
    title: "Add Course Details",
    type: "upload",
    disabled: false,
    value: (
      <div className="text-center">
        <button className="btn btn-primary">ADD</button>
      </div>
    ),
  },
];

function ViewAllCenters() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div
      className="card w-100 h-100 mt-4"
      style={{
        borderColor: "#fff",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
    >
      <div class="card">
        <h4 className="mt-3 mb-3 text-center">
          Particulars of the All Centers with Courses
        </h4>
        <p></p>
        <div
          className="card mt-4"
          style={{
            width: "100%",
            borderColor: "#fff",
            boxShadow:
              "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
          }}
        >
          <div class="row">
            <div class="column">
              <div class="card-body">
                <Table items={tableData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewAllCenters;
