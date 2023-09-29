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
    <div className="card" style={{ height: "100% " }}>
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
