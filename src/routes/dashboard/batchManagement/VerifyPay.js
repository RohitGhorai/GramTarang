import React, { useState } from "react";
import Table from "../Table";
import { Link } from "react-router-dom";

const VerifyPay = () => {
  const [color, setColor] = useState(false);
  const tableData = [
    {
      title: "Center ID",
      type: "text",
      disabled: true,
      value: "------------------",
    },
    {
      title: "ABN No.",
      type: "text",
      disabled: true,
      value: "------------------",
    },
    {
      title: "Batch ID",
      type: "text",
      disabled: true,
      value: "------------------",
    },
    {
      title: "Project ID",
      type: "text",
      disabled: true,
      value: "------------------",
    },
    {
      title: "Assessment Date",
      type: "text",
      disabled: true,
      value: "------------------",
    },
    {
      title: "Total Candidate",
      type: "text",
      disabled: true,
      value: "------------------",
    },
    {
      title: "Amount",
      type: "text",
      disabled: true,
      value: "------------------",
    },
    {
      title: "Pay Invoice",
      type: "upload",
      disabled: true,
      value: (
        <Link to="/dashboard/batchManagement/verify&pay/pay">
          <div className="text-center" style={{ cursor: "pointer" }}>
          <span
            onMouseEnter={() => setColor(true)}
            onMouseLeave={() => setColor(false)}
            style={
              !color
                ? { color: "#fbc309", cursor: "pointer" }
                : {
                    color: "green",
                    fontWeight: "bold",
                    transition: "all 0.3s ease-in-out",
                  }
            }
          >
            Verify
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
        className="text-center fw-bold"
        style={{
          fontSize: "24px",
          margin: "1em",
          fontWeight: "bold",
          WebkitTextFillColor: "#51287f",
        }}
      >
        Your Batches Pending For Verification / Payments
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
        <Table items={tableData} />
      </div>
    </div>
  );
};

export default VerifyPay;
