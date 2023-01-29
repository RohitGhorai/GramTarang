import * as React from "react";

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
const Scheme = [
  "DDUGKY",
  "PMKK",
  "Sagarmala",
  "PMKVY",
  "Roshni",
  "NULM",
  "OSDA",
  "CORPORATES",
  "MORTH-RPL",
  "MMKVY",
  "Samarth",
  "PMKUV",
  "PMAKVY",
  "Gujrat",
  "SURYAMITRA",
  "VBKY",
  "MEPMA",
  "Standalone Training Institutes",
  "HIMMAYAT",
  "NAI MANZIL",
  "SEEKHO AUR KAMAO",
  "SEEDAP - AYS",
  "Uttar Pradesh Skill Development Mission",
];
const Organization = [
  "Institute Setup By Govt.",
  "Institute Setup By Corporate",
  "Institute Setup By Trust / NGO / Society",
  "Corporates",
  "Standalone Training Institutes",
  "Others",
];
export const TpRegnProcess_2 = (
  <div className="container">
    <section id="step-2" className="form-step">
      <h2 className="font-normal" style={{ color: "#00008B" }}>
        Scheme & Organization Detail
      </h2>
      <form className="row g-3 mt-3">
        <div className="form-group">
          <label for="exampleFormControlSelect2">Scheme</label>
          <select className="form-control">
            <option value="" selected="">
              --Select--
            </option>
            {Scheme.map((props) => (
              <option value={props}>{props}</option>
            ))}
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
            <option value="" selected="">
              --Select--
            </option>
            {Organization.map((props) => (
              <option value={props}>{props}</option>
            ))}
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
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">Website</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail3" />
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">PAN Card</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="inputEmail3" />
            </div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-2 col-form-label">PAN Number</label>
            <div className="col-sm-10">
              <input type="number" className="form-control" id="inputEmail3" />
            </div>
          </div>
        </div>
      </form>
    </section>
  </div>
);
