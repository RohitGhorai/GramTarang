import React from "react";
import Form from "../../../Components/Form";

const form = [
  { title: "Center ID", type: "text", disabled: false },
  { title: "Project", type: "text", disabled: true },
  {
    title: "Project ID(MPR e.g. DDU211,CO2123)",
    type: "text",
    disabled: false,
  },
  { title: "Name of The Center", type: "text", disabled: false },
  { title: "PRN No.", type: "text", disabled: true },
];

const AddProject = () => {
  return <Form heading={"Add Project"} items={form} />;
};

export default AddProject;
