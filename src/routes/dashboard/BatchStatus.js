import React from "react";
import { useState, useEffect } from "react";
import { getBatchStatus } from "../../services/batch-service";
import Table from "./Table";

const styles = {
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
};

const batchDetails = (batch) => [
  {
    title: "Project ID",
    type: "text",
    disabled: true,
    value: batch.projectId,
  },
  {
    title: "Center ID",
    type: "text",
    disabled: true,
    value: batch.centerId,
  },
  {
    title: "Center Name",
    type: "text",
    disabled: true,
    value: batch.centerName,
  },
  {
    title: "Total Batches",
    type: "text",
    disabled: true,
    value: batch.totalBatches,
  },
  {
    title: "Completed Batches",
    type: "text",
    disabled: true,
    value: batch.completedBatches,
  },
  {
    title: "Ongoing Batches",
    type: "text",
    disabled: true,
    value: batch.ongoingBatches,
  },
  {
    title: "Pending Batches",
    type: "text",
    disabled: true,
    value: batch.pendingBatches,
  },
];
const BatchStatus = ({ centerId }) => {
  const [batches, setBatches] = useState([]);
  useEffect(() => {
    getBatchStatus(centerId)
      .then((batch) => {
        setBatches(([batch]));
      })
      .catch((error) => console.log(error));
  }, [centerId]);
  console.log(batches)
  return (
    <>
      <div className="card" style={styles.card && { padding: "15px" }}>
        {batches.map((batch, index) => (
          <Table
            style={styles.textCenter}
            heading={`${index === 0 ? "Batch Status" : ""}`}
            items={batchDetails(batch)}
          />
        ))}
      </div>
    </>
  );
};

export default BatchStatus;
