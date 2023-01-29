import React from "react";

export default (props) => (
  <svg
    id={props.id}
    width={props.height || "15"}
    height={props.height || "15"}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM12 5v14h8V5h-8zm1 2h6v2h-6V7zm0 3h6v2h-6v-2z"
      opacity="1"
      fill="#9FA2B4"
      fillOpacity="1"
    />
  </svg>
);
