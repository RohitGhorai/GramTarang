import React from "react";

function Form_2() {
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
  return (
    <>
      {HO_Detail.map((col_1) => (
        <div className="col-sm-6">
          <div className="row">
            <label for="colFormLabel" className="col-sm-2 col-form-label">
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
    </>
  );
}

function Tp_regn_process_3() {
  return (
    <section id="step-3" className="form-step d-none">
      <h2 className="font-normal" style={{ color: "#00008B" }}>
        Head Owner Details
      </h2>
      <form className="row g-3 mt-3">
        <Form_2 />
        <div className="mt-4">
          <h4 className="text-center mt-2 mb-3" style={{ color: "#00008B" }}>
            Other Promoter Details
          </h4>
          <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">
              Promoter 1
            </label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="inputEmail3" />
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">
              Promoter 2
            </label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="inputEmail3" />
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">
              Promoter 3
            </label>
            <div class="col-sm-10">
              <input type="number" class="form-control" id="inputEmail3" />
            </div>
          </div>
        </div>
      </form>

      <div className="mt-3 text-center">
        <button
          className="button btn-navigate-form-step"
          type="button"
          step_number="2"
        >
          Previous
        </button>
        <button
          className="button btn-navigate-form-step"
          type="button"
          step_number="4"
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default Tp_regn_process_3;
