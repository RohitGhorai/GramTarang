import * as React from "react";

const HO_Detail = [
  { title: "Name", type: "text" },
  { title: "Educational Qualification", type: "text" },
  { title: "Date of Birth", type: "date" },
  { title: "Total Work Experience", type: "text" },
  { title: "Citizenship", type: "text" },
  { title: "PAN Number", type: "number" },
  { title: "Residence Address", type: "text" },
  { title: "Permanent Address", type: "text" },
  { title: "Mobile Number", type: "number" },
  { title: "Alt. Mobile Number", type: "number" },
  { title: "Aadhar Number", type: "number" },
  { title: "Aadhar Number(Optional)", type: "number" },
  { title: "Email", type: "email" },
];

export const TpRegnProcess_3 = (
  <div className="container">
    <div className="container">
      <section id="step-3" className="form-step">
        <h2 className="font-normal" style={{ color: "#00008B" }}>
          Head Owner Details
        </h2>
        <form className="row g-3 mt-3">
          {HO_Detail.map((col_1) => (
            <div className="col-sm-6">
              <div className="row">
                <label
                  htmlFor="colFormLabel"
                  className="col-sm-2 col-form-label"
                >
                  {col_1.title}
                </label>
                <div className="col-sm-10">
                  <input
                    type={col_1.type}
                    className="form-control"
                    id="colFormLabel"
                  />
                </div>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <h4 className="text-center mt-2 mb-3" style={{ color: "#00008B" }}>
              Other Promoter Details
            </h4>
            <div className="row mb-3">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                Promoter 1
              </label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="inputEmail3" />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                Promoter 2
              </label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="inputEmail3" />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                Promoter 3
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  id="inputEmail3"
                />
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  </div>
);
