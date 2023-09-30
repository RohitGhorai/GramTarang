import React, {useState} from "react";
import Table from "../Table";
import { Link } from "react-router-dom";

const AddPhotos = () => {
    const [hover, setHover] = useState(false);
  const table = [
    {
      title: "ABN No.",
      type: "text",
      disabled: true,
      value: "---------------------",
    },
    {
      title: "Center Project ID",
      type: "text",
      disabled: true,
      value: "---------------------",
    },
    {
      title: "Center Name",
      type: "text",
      disabled: true,
      value: "---------------------",
    },
    {
      title: "Batch ID",
      type: "text",
      disabled: true,
      value: "---------------------",
    },
    {
      title: "Upload Photo",
      type: "upload",
      disabled: false,
      value: (
        <Link
          to="/dashboard/batchManagement/addPhotos/studentData"
        >
          <div className="text-center" style={{cursor: "pointer"}}>
          <span
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={!hover ? { color: "#fbc309" } : { color: "green", fontWeight: "bold", transition: "all 0.3s ease-in-out"}}
          >
            Upload
          </span>
          </div>
        </Link>
      ),
    },
  ];
  return (
    <div
      className="card w-100 h-100 mt-4"
      style={{
        borderColor: "#fff",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
    >
      <span
        className="text-center mt-3 mb-3"
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          WebkitTextFillColor: "#51287f",
        }}
      >
        Your List of Approved Centers ABN + Batch Details
      </span>
      <div
        className="card mt-4"
        style={{
          width: "100%",
          borderColor: "#fff",
          boxShadow:
            "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
        }}
      >
        <Table
          heading={"Particulars of the All ABN Generated"}
          items={table}
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

export default AddPhotos;
