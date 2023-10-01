import React from "react";

const Table = ({ items, heading, style }) => {
  return (
    <div style={style}>
      <span style={{ margin: "1em", fontSize: "22px", fontWeight: "bold", WebkitTextFillColor: "#51287f" }}>
        {heading}
      </span>
      <table id="customers">
        <tr>
          {items.map((item, index) => (
            <th key={index} style={{ fontSize: "16px" }}>
              {item.title}
            </th>
          ))}
        </tr>
        <tr>
          {items.map((item, index) => (
            <td key={index} style={{ fontSize: "14px"}}>
              {item.type === "upload" ? (
                <>{item.value}</>
              ) : (
                <input
                  type={item.type}
                  style={{ border: "none" }}
                  value={item.value}
                  disabled={item.disabled}
                />
              )}
            </td>
          ))}
        </tr>
      </table>
    </div>
  );
};

export default Table;
