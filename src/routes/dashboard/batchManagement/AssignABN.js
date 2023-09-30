import React from "react";

const table = [
  { title: "Center", type: "text" },
  { title: "Project ID", type: "text" },
  { title: "Proposed Assessment Date", type: "date" },
  { title: "Course Code", type: "text" },
  { title: "Batch ID", type: "text" },
  { title: "Batch No.", type: "number" },
  { title: "ABN No.", type: "text" },
];

const AssignABN = () => {
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
        className="text-center mt-4 mb-3"
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          WebkitTextFillColor: "#51287f",
        }}
      >
        Upload Batch
      </span>
      <form action="/">
        {table.map((e, index) => (
          <div className="row">
            <div className="col-25">
              <label for="fname">{e.title}</label>
            </div>
            {e.title === "Country" ? (
              <div className="col-75">
                <select key={index} id="country" name="country">
                  <option value="australia">Australia</option>
                  <option value="canada">Canada</option>
                  <option value="usa">USA</option>
                </select>
              </div>
            ) : (
              <div className="col-75">
                <input key={index} type={e.type} id="fname" name={e.title} />
              </div>
            )}
          </div>
        ))}
        <div className="row text-center">
          <input
            type="submit"
            value="Save"
            className="text-center mt-4"
            style={{ width: "100%", margin: "auto" }}
          />
        </div>
      </form>
    </div>
  );
};

export default AssignABN;
