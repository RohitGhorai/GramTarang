import React from "react";

const Form = () => {
  const SO_Detail = [
    { title: "Address", type: "text" },
    { title: "District", type: "text" },
    { title: "City", type: "text" },
    { title: "State/UT", type: "text" },
    { title: "Pin code", type: "number" },
    { title: "Telephone", type: "number" },
    { title: "Mobile", type: "number" },
    { title: "Email Id", type: "email" },
    { title: "GST", type: "number" },
  ];
  return (
    <>
      {SO_Detail.map((col_1) => (
        <div className="row mb-3">
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
      ))}
    </>
  );
};
const Tp_regn_process_2 = () => {
  return (
    <section id="step-2" className="form-step d-none">
      <h2 className="font-normal" style={{ color: "#00008B" }}>
        Scheme & Organization Detail
      </h2>
      <form>
        <div className="form-group">
          <label for="exampleFormControlSelect2">Scheme</label>
          <select className="form-control">
            <option>-- Select --</option>
            <option>-- 1 --</option>
            <option>-- 2 --</option>
            <option>-- 3 --</option>
            <option>-- 4 --</option>
          </select>
        </div>
        <div className="form-group" style={{ marginTop: "10px" }}>
          <label>Name of the Organization</label>
          <input
            className="form-control form-control-sm"
            type="text"
            placeholder="Enter Organization Name"
          />
        </div>
        <div className="form-group" style={{ marginTop: "10px" }}>
          <label for="exampleFormControlSelect2">
            Category of Organization
          </label>
          <select className="form-control">
            <option>-- Select --</option>
            <option>-- 1 --</option>
            <option>-- 2 --</option>
            <option>-- 3 --</option>
            <option>-- 4 --</option>
          </select>
        </div>
        <div className="form-group" style={{ marginTop: "10px" }}>
          <label>Affiliation / Accreditation</label>
          <input
            className="form-control form-control-sm"
            type="text"
            placeholder="Enter Organization Name"
          />
        </div>
        <div className="form-group" style={{ marginTop: "10px" }}>
          <label>Date of Incorporation</label>
          <input
            className="form-control form-control-sm"
            type="date"
            placeholder="dd/mm/yyyy"
          />
        </div>
      </form>
      <form className="row g-3">
        <div className="col-sm-6">
          <div className="form-group mt-5 mb-4">
            <h4 className="text-center" style={{ color: "#00008B" }}>
              Registered Office Address
            </h4>
          </div>

          <Form />
        </div>
        <div className="col-sm-6">
          <div className="form-group mt-5 mb-4">
            <h4 className="text-center" style={{ color: "#00008B" }}>
              Regional/State Office Address
            </h4>
          </div>

          <Form />
        </div>
        <div className="mt-4">
          <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">
              Website
            </label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="inputEmail3" />
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">
              PAN Card
            </label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="inputEmail3" />
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">
              PAN Number
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
          step_number="1"
        >
          Previous
        </button>

        <button
          className="button btn-navigate-form-step"
          type="button"
          step_number="3"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Tp_regn_process_2;
