import React from "react";

function Tp_regn_process_4() {
  const PC_Detail = [
    { title: "Name", type: "text" },
    { title: "Designation", type: "text" },
    { title: "Resident Address", type: "text" },
    { title: "Permanent Address", type: "text" },
    { title: "Citizenship", type: "text" },
    { title: "Mobile Number", type: "number" },
    { title: "Alt. Mobile Number", type: "number" },
    { title: "Email Id", type: "email" },
    { title: "Alt. Email Id", type: "email" },
    { title: "User Name", type: "text" },
  ];
  return (
    <section id="step-4" className="form-step d-none">
      <h2 className="font-normal" style={{ color: "#00008B" }}>Project Contact Personal Details</h2>
      <h4 className="text-center mt-3" style={{ color: "#00008B" }}>Regional/State Office</h4>
        <form className="row g-3 mt-3">
      {PC_Detail.map((props) => (
          <div className="col-sm-6">
            <div className="row">
              <label for="colFormLabel" className="col-sm-2 col-form-label">
                {props.title}
              </label>
              <div className="col-sm-10">
                <input
                  type={props.type}
                  className="form-control"
                  id="colFormLabel"
                />
              </div>
            </div>
      </div>
      ))}
      </form>
      <div className="text-center mt-3">
        <button
          className="button btn-navigate-form-step"
          type="button"
          step_number="3"
        >
          Previous
        </button>
        <button className="button submit-btn" type="submit">
          Submit & Pay Onboarding Fees
        </button>
      </div>
    </section>
  );
}

export default Tp_regn_process_4;
