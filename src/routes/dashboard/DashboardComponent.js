import React from "react";
import logo from "../../Assets/default.png";
import Table from "./Table";
import Paper from "../../Assets/paper.jpeg"

const styles = {
  cardBody: {
    margin: "8px",
    padding: "10px",
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    border: "1px solid darkgray",
    borderRadius: "8px",
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
  { title: "Amasy UID", value: "--------------" },
  { title: "Organisation Name", value: "----------------" },
  { title: "Contact Person", value: "----------------" },
  { title: "Contact Email ID", value: "----------------" },
  { title: "Contact Mobile No.", value: "----------------" },
];
const batchStatus = [
  { title: "Project ID", value: "--------------" },
  { title: "Center ID", value: "--------------" },
  { title: "Center Name", value: "--------------" },
  { title: "Total Batches", value: "--------------" },
  { title: "Completed Batches", value: "--------------" },
  { title: "Ongoing Batches", value: "--------------" },
  { title: "Pending Batches", value: "--------------" },
];
const batchAssessmentStatus = [
  { title: "Project ID", value: "--------------" },
  { title: "Center ID", value: "--------------" },
  { title: "Center Name", value: "--------------" },
  { title: "Batch ID", value: "--------------" },
  { title: "ABN No.", value: "--------------" },
  { title: "Final Assessment Date", value: "--------------" },
  { title: "Status", value: "--------------" },
];

const DashboardComponent = () => {
  return (
    <div className="cardBody" style={styles.cardBody}>
      <div className="card" style={styles.card && { marginTop: "10px", backgroundImage: `url(${Paper})`, backgroundSize: "cover" }}>
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            WebkitTextFillColor: "#fff"
          }}
        >
          <image src={logo}
            style={{
              width: "60px",
              height: "60px",
              marginBottom: "10px",
              borderRadius: "100%",
              backgroundImage: `url(${logo})`,
              backgroundSize: "cover"
            }}
            alt="logo"
          />
          <span style={{ fontWeight: "bold" }}>Welcome Onboard!</span>
          <span style={{marginTop:"5px"}}>Demo Centre</span>
          <span style={{fontSize:"12px"}}>Training Partner</span>
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
