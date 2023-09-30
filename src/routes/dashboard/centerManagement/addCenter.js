import React from "react";
import "./center.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Table from "../Table";

const tableData = [
  {
    title: "Amasy UID",
    type: "text",
    disabled: true,
    value: "---------------",
  },
  {
    title: "Center ID",
    type: "text",
    disabled: true,
    value: "---------------",
  },
  {
    title: "Center Name",
    type: "text",
    disabled: true,
    value: "---------------",
  },
  { title: "Scheme", type: "text", disabled: true, value: "---------------" },
  {
    title: "Project ID",
    type: "text",
    disabled: true,
    value: "---------------",
  },
];
const particularsOfCenters = [
  { title: "Name" },
  { title: "Desigination" },
  { title: "Citizenship" },
  { title: "Date Of Birth" },
  { title: "Resident Address" },
  { title: "Permanent Address" },
  { title: "Mobile Number" },
  { title: "Alt. Mobile Number" },
  { title: "Email" },
  { title: "Educational Qualificaation" },
  { title: "Total Work Experience" },
  { title: "PAN Number" },
  { title: "Aadhar Number(Optional)" },
];
const centerDetails = [
  { title: "Address", type: "text" },
  { title: "District", type: "text" },
  { title: "City", type: "text" },
  { title: "Country", type: "text" },
  { title: "Pin Code", type: "text" },
  { title: "Telephone", type: "text" },
  { title: "Mobile", type: "text" },
  { title: "Fax", type: "text" },
  { title: "Email", type: "email" },
];
function AddCenter() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div
        className="card w-100 h-100 mt-4"
        style={{
          borderColor: "#fff",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
      >
        <div className="m-4 mb-1 mt-2">
          <h3 className="text-center" style={{ margin: "0.5em" }}>
            Add New Training Center
          </h3>
          <div className="row">
            <div className="column">
              <div
                className="border p-2 rounded"
                style={{
                  width: "100%",
                  borderColor: "#fff",
                  boxShadow:
                    "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
                }}
              >
                <Table
                  heading={"Add Center Details"}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                  items={tableData}
                />
              </div>
              <h3 className="text-center mt-4 mb-3">Center Contact Details</h3>
              <div className="contain">
                <form action="/">
                  {centerDetails.map((center, index) => (
                    <div className="row">
                      <div className="col-25">
                        <label for="fname">{center.title}</label>
                      </div>
                      {center.title === "Country" ? (
                        <div className="col-75">
                          <select key={index} id="country" name="country">
                            <option value="australia">Australia</option>
                            <option value="canada">Canada</option>
                            <option value="usa">USA</option>
                          </select>
                        </div>
                      ) : (
                        <div className="col-75">
                          <input
                            key={index}
                            type={center.type}
                            id="fname"
                            name={center.title}
                          />
                        </div>
                      )}
                    </div>
                  ))}

                  <h3 className="text-center mt-3 mb-3">
                    Particulars of Center
                  </h3>
                  {particularsOfCenters.map((poc, index) => (
                    <div className="row">
                      <div className="col-25">
                        <label for="fname">{poc.title}*</label>
                      </div>
                      <div className="col-75">
                        {poc.title === "Resident Address" ||
                        poc.title === "Permanent Address" ? (
                          <textarea type="text" id="fname" />
                        ) : (
                          <input type="text" id="fname" />
                        )}
                      </div>
                    </div>
                  ))}
                  <div className="row text-center">
                    <input
                      type="submit"
                      value="Proceed For Go Ahead Letter Upload"
                      className=" text-center mt-4"
                      style={{ width: "40%", margin: "auto" }}
                    />
                    <Link to="/goAheadLetter" className="info">
                      Choose State
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <br></br>
      </div>
    </>
  );
}

export default AddCenter;
