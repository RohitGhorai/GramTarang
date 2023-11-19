import React, { useContext, useEffect, useState } from "react";
import logo from "../../Assets/default.png";
import Table from "./Table";
import Paper from "../../Assets/paper.jpeg";
import userContext from "../../context/userContext";
import { getCenterByTpUser } from "../../services/center-service";
import BatchStatus from "./BatchStatus";

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
const orgDetail = (data) => [
  {
    title: "Amasy UID",
    type: "text",
    disabled: true,
    value: data.user.tpUser.id,
  },
  {
    title: "Organisation Name",
    type: "text",
    disabled: true,
    value: data.user.tpUser.orgName,
  },
  {
    title: "Contact Person",
    type: "text",
    disabled: true,
    value: data.user.tpUser.pcName,
  },
  {
    title: "Contact Email ID",
    type: "text",
    disabled: true,
    value: data.user.tpUser.pcEmail,
  },
  {
    title: "Contact Mobile No.",
    type: "text",
    disabled: true,
    value: data.user.tpUser.pcPhNumber,
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
  const data = useContext(userContext);
  const [centers, setCenters] = useState();
  useEffect(() => {
    getCenterByTpUser(data.user.tpUser.id)
      .then(center => {
        setCenters(center);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [data.user.tpUser.id]);
  console.log(centers)
  console.log(data)
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
      <div className="card" style={{...styles.card, overflow: "hidden"}}>
        <span style={styles.smText}>Notice / Updates For You</span>
        <div className="left-to-right-animation" style={styles.lgText}>
        <span>
          Welcome to Centurion University | Amasy Portal. | Please Pay Your Fees
        </span>
        </div>
      </div>
      <div className="card" style={styles.card && { padding: "15px" }}>
        <Table
          style={styles.textCenter}
          heading={"Particulars of the Organizations"}
          items={orgDetail(data)}
        />
      </div>
      {centers && centers.map((center) => (
        <BatchStatus centerId={center.id}/>
      ))}
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
