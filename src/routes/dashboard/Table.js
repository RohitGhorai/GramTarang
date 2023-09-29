import React from "react";

const Table = ({ items, heading, style }) => {
  return (
    <div style={style}>
    <span style={{ margin: "1em", fontSize: "22px", fontWeight: "bold" }}>
            {heading}
          </span>
    <table id="customers">
      <tr>
        {items.map((item, index) => (
          <th key={index} style={{fontSize: "16px"}}>{item.title}</th>
        ))}
      </tr>
      <tr>
        {items.map((item, index) => <td key={index} style={{fontSize: "14px"}}>{item.value}</td>)}
      </tr>
    </table>
    </div>
  );
};

export default Table;
