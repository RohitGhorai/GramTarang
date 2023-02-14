import React from "react";
import "./center.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

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
              <table id="customers">
                <tr>
                  <th>Amasy UID</th>
                  <th>Center ID</th>
                  <th>Center Name</th>
                  <th>Scheme</th>
                  <th>Project ID</th>
                </tr>
                <tr className="text-center">
                  <td>-------------</td>
                  <td> --------------- </td>
                  <td>--------------</td>
                  <td>--------------</td>
                  <td>Add</td>
                </tr>
              </table>
              <h3 className="text-center mt-4 mb-3">Center Contact Details</h3>

              <div className="contain">
                <form action="/">
                  <div className="row">
                    <div className="col-25">
                      <label for="fname">Address</label>
                    </div>
                    <div className="col-75">
                      <input type="text" id="fname" name="firstname" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-25">
                      <label for="fname">District</label>
                    </div>
                    <div className="col-75">
                      <input type="text" id="fname" name="firstname" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-25">
                      <label for="fname">City</label>
                    </div>
                    <div className="col-75">
                      <input type="text" id="fname" name="firstname" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-25">
                      <label for="country">Country</label>
                    </div>
                    <div className="col-75">
                      <select id="country" name="country">
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                      </select>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-25">
                      <label for="fname">Pin Code</label>
                    </div>
                    <div className="col-75">
                      <input type="text" id="fname" name="Pincode" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-25">
                      <label for="fname">Telephone</label>
                    </div>
                    <div className="col-75">
                      <input type="text" id="fname" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-25">
                      <label for="fname">Mobile</label>
                    </div>
                    <div className="col-75">
                      <input type="text" id="fname" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-25">
                      <label for="fname">Fax</label>
                    </div>
                    <div className="col-75">
                      <input type="text" id="fname" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-25">
                      <label for="fname">Email</label>
                    </div>
                    <div className="col-75">
                      <input type="text" id="fname" />
                    </div>
                  </div>

                  <h3 className="text-center mt-3 mb-3">Particulars of Center</h3>
                  <div className="row">
                    <div className="col-25">
                      <label for="fname">Name*</label>
                    </div>
                    <div className="col-75">
                      <input type="text" id="fname" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-25">
                      <label for="fname">Desigination*</label>
                    </div>
                    <div className="col-75">
                      <input type="text" id="fname" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-25">
                      <label for="fname">Citizenship*</label>
                    </div>
                    <div className="col-75">
                      <input type="text" id="fname" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-25">
                      <label for="fname">Date Of Birth</label>
                    </div>
                    <div className="col-75">
                      <input type="text" id="fname" name="dd/mm/yyyy" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-25">
                      <label for="fname">Resident Address*</label>
                    </div>
                    <div className="col-75">
                      <textarea
                        id="subject"
                        name="subject"
                        placeholder=" "
                        height="300px"
                      ></textarea>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-25">
                      <label for="fname">Permanent Address*</label>
                    </div>
                    <div className="col-75">
                      <textarea
                        id="subject"
                        name="subject"
                        placeholder=" "
                        height="300px"
                      ></textarea>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-25">
                      <label for="fname">Mobile Number*</label>
                    </div>
                    <div className="col-75">
                      <input type="text" id="fname" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-25">
                      <label for="fname">Alt. Mobile Number*</label>
                    </div>
                    <div className="col-75">
                      <input type="text" id="fname" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-25">
                      <label for="fname">Email*</label>
                    </div>
                    <div className="col-75">
                      <input type="text" id="fname" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-25">
                      <label for="fname">Educational Qualificaation*</label>
                    </div>
                    <div className="col-75">
                      <input type="text" id="fname" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-25">
                      <label for="fname">Total Work Experience</label>
                    </div>
                    <div className="col-75">
                      <textarea
                        id="subject"
                        name="subject"
                        placeholder=" "
                        height="200px"
                      ></textarea>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-25">
                      <label for="fname">PAN Number</label>
                    </div>
                    <div className="col-75">
                      <input type="text" id="fname" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-25">
                      <label for="fname">Aadhar Number(Optional) </label>
                    </div>
                    <div className="col-75">
                      <input type="text" id="fname" />
                    </div>
                  </div>

                  <div className="row text-center">
                    <input
                      type="submit"
                      value="Proceed For Go Ahead Letter Upload"
                      className=" text-center mt-4"
                      style={{width: "40%", margin: "auto"}}
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
