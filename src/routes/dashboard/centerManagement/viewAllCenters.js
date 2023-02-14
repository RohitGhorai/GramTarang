import React from "react";
import "./center.css";
import { useEffect } from "react";
import { Button } from "bootstrap";

function ViewAllCenters() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div class="Mainbody">
      <div class="card">
        <h4 className="mt-3 mb-3 text-center">Particulars of the All Centers with Courses </h4>
        <p></p>
        <div class="card">
          <div class="row">
            <div class="column">
              <div class="card-body">
                <table id="customers">
                  <tr>
                    <th>Amasy UID</th>
                    <th>Center ID</th>
                    <th>Center Name</th>
                    <th>Scheme</th>
                    <th>Project ID</th>
                    <th>Add Course Details</th>
                  </tr>
                  <tr>
                    <td>-------------</td>
                    <td> --------------- </td>
                    <td>--------------</td>
                    <td>--------------</td>
                    <td>--------------</td>
                    <td className="text-center">
                      <button className="btn btn-primary" href="/AddCourse">ADD</button>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewAllCenters;
