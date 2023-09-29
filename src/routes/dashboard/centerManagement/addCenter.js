import React from "react";
import "./center.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Table from "../Table";

const highlight = [
  { title: "Amasy UID", value: "---------------" },
  { title: "Center ID", value: "---------------" },
  { title: "Center Name", value: "---------------" },
  { title: "Scheme", value: "---------------" },
  { title: "Project ID", value: "---------------" },
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
      <div className="Mainbody">
        <br></br>

        <div className="card">
          <h3 className="text-center">Add New Training Center </h3>
          <p></p>
          <div className="row">
            <div className="column">
              <h5 className="text-center mt-3 mb-2"> Add Center Details</h5>
              <Table items={highlight} />
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
