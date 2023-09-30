import React from "react";
import logo from "../../Assets/default.png";
import Table from "./Table";
import Paper from "../../Assets/paper.jpeg";

const styles = {
  cardBody: {
    borderColor: "#fff",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  },
  card: {
    marginTop: "5px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid gray",
    borderRadius: "8px",
  },
  textCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  smText: {
    fontSize: "16px",
  },
  lgText: {
    margin: "1em",
    fontSize: "24px",
    fontWeight: "bold",
    WebkitTextFillColor: "#d8ac1a",
  },
};

const orgDetail = [
  {
    title: "Amasy UID",
    type: "text",
    disabled: true,
    value: "--------------",
  },
  {
    title: "Organisation Name",
    type: "text",
    disabled: true,
    value: "----------------",
  },
  {
    title: "Contact Person",
    type: "text",
    disabled: true,
    value: "----------------",
  },
  {
    title: "Contact Email ID",
    type: "text",
    disabled: true,
    value: "----------------",
  },
  {
    title: "Contact Mobile No.",
    type: "text",
    disabled: true,
    value: "----------------",
  },
];
const batchStatus = [
  {
    title: "Project ID",
    type: "text",
    disabled: true,
    value: "--------------",
  },
  {
    title: "Center ID",
    type: "text",
    disabled: true,
    value: "--------------",
  },
  {
    title: "Center Name",
    type: "text",
    disabled: true,
    value: "--------------",
  },
  {
    title: "Total Batches",
    type: "text",
    disabled: true,
    value: "--------------",
  },
  {
    title: "Completed Batches",
    type: "text",
    disabled: true,
    value: "--------------",
  },
  {
    title: "Ongoing Batches",
    type: "text",
    disabled: true,
    value: "--------------",
  },
  {
    title: "Pending Batches",
    type: "text",
    disabled: true,
    value: "--------------",
  },
];
const batchAssessmentStatus = [
  {
    title: "Project ID",
    type: "text",
    disabled: true,
    value: "--------------",
  },
  {
    title: "Center ID",
    type: "text",
    disabled: true,
    value: "--------------",
  },
  {
    title: "Center Name",
    type: "text",
    disabled: true,
    value: "--------------",
  },
  {
    title: "Batch ID",
    type: "text",
    disabled: true,
    value: "--------------",
  },
  { title: "ABN No.", type: "text", disabled: true, value: "--------------" },
  {
    title: "Final Assessment Date",
    type: "text",
    disabled: true,
    value: "--------------",
  },
  { title: "Status", type: "text", disabled: true, value: "--------------" },
];

const DashboardComponent = () => {
  return (
    <div className="card w-100 h-100 mt-3" style={styles.cardBody}>
      <div
        className="card"
        style={
          styles.card && {
            marginTop: "10px",
            backgroundImage: `url(${Paper})`,
            backgroundSize: "cover",
          }
        }
      >
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            WebkitTextFillColor: "#fff",
          }}
        >
          <image
            src={logo}
            style={{
              width: "60px",
              height: "60px",
              marginBottom: "10px",
              borderRadius: "100%",
              backgroundImage: `url(${logo})`,
              backgroundSize: "cover",
            }}
            alt="logo"
          />
          <span style={{ fontWeight: "bold" }}>Welcome Onboard!</span>
          <span style={{ marginTop: "5px" }}>Demo Centre</span>
          <span style={{ fontSize: "12px" }}>Training Partner</span>
        </div>
      </div>
      <div className="card" style={styles.card}>
        <span style={styles.smText}>Notice / Updates For You</span>
        <span style={styles.lgText}>
          Welcome to Centurion University | Amasy Portal. | Please Pay Your Fees
        </span>
      </div>
      <div className="card" style={styles.card && { padding: "15px" }}>
        <Table
          style={styles.textCenter}
          heading={"Particulars of the Organizations"}
          items={orgDetail}
        />
      </div>
      <div className="card" style={styles.card && { padding: "15px" }}>
        <Table
          style={styles.textCenter}
          heading={"Batch Status"}
          items={batchStatus}
        />
      </div>
      <div className="card" style={styles.card && { padding: "15px" }}>
        <Table
          style={styles.textCenter}
          heading={"Batch Assessment Status"}
          items={batchAssessmentStatus}
        />
      </div>
    </div>
  );
};

export default DashboardComponent;
