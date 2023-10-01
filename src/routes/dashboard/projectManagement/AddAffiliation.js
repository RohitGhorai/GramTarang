import React from "react";
import Table from "./../Table";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

const table = [
  {
    title: "Amasy ID",
    type: "text",
    disabled: true,
    value: "-----------------",
  },
  {
    title: "Center ID",
    type: "text",
    disabled: true,
    value: "-----------------",
  },
  {
    title: "Center Name",
    type: "text",
    disabled: true,
    value: "-----------------",
  },
  { title: "Scheme", type: "text", disabled: true, value: "-----------------" },
  {
    title: "Project ID",
    type: "text",
    disabled: true,
    value: "-----------------",
  },
  {
    title: "Add Affiliation Details",
    type: "upload",
    disabled: false,
    value: <Link to="/dashboard/projectManagement/addAffiliation/add">
       <Button className="w-50 text-warning" variant="light">Add</Button>
    </Link>
  },
];

const AddAffiliation = () => {
  return (
    <div
      className="card w-100 h-100 mt-3"
      style={{
        borderColor: "#fff",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
    >
      <Table
        heading={"Add Affiliation of the All Projects"}
        items={table}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      />
    </div>
  );
};

export default AddAffiliation;
