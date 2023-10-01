import React from "react";
import Form from "../../../Components/Form";

const form = [
  { title: "Center", type: "text", disabled: false },
  { title: "Project ID", type: "text", disabled: false },
  { title: "Proposed Assessment Date", type: "date", disabled: false },
  { title: "Course Code", type: "text", disabled: false },
  { title: "Batch ID", type: "text", disabled: false },
  { title: "Batch No.", type: "number", disabled: false },
  { title: "ABN No.", type: "text", disabled: false },
];

const AssignABN = () => {
  return <Form heading={"Upload Batch"} items={form} />;
};

export default AssignABN;
