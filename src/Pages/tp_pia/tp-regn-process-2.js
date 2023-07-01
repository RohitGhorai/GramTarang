import * as React from "react";
import { useEffect } from "react";
import { getAllSchemes } from "../../services/sche-service";
import { getAllOrgs } from "./../../services/org-service";

export const TpRegnProcess_2 = ({ rgData, setRgData }) => {
  const [scheme, setScheme] = React.useState([]);
  const [org, setOrg] = React.useState([]);
  const [input, setInput] = React.useState({
    schId: 0,
    orgId: 0,
    orgName: "",
    affiliation: "",
    roaAddress: "",
    roaDist: "",
    roaCity: "",
    roaState: "",
    roaPin: "",
    roaTelNo: "",
    roaMobNo: "",
    roaEmail: "",
    roaGst: "",
    soaAddress: "",
    soaDist: "",
    soaCity: "",
    soaState: "",
    soaPin: "",
    soaTelNo: "",
    soaMobNo: "",
    soaEmail: "",
    soaGst: "",
    website: "",
    panCard: "",
    panNumber: "",
  });

  useEffect(() => {
    getAllSchemes().then((data) => setScheme([...data]));
    getAllOrgs().then((data) => setOrg([...data]));
  }, []);

  const handleChange = (event, field) => {
    const value = event.target.value;
    setInput({ ...input, [field]: value });
    setRgData({ ...rgData, [field]: value });
  };
  const soa = [
    {
      title: "Address",
      type: "text",
      onChange: (event) => handleChange(event, "soaAddress"),
      value: rgData.soaAddress,
    },
    {
      title: "District",
      type: "text",
      onChange: (event) => handleChange(event, "soaDist"),
      value: rgData.soaDist,
    },
    {
      title: "City",
      type: "text",
      onChange: (event) => handleChange(event, "soaCity"),
      value: rgData.soaCity,
    },
    {
      title: "State/UT",
      type: "text",
      onChange: (event) => handleChange(event, "soaState"),
      value: rgData.soaState,
    },
    {
      title: "Pin code",
      type: "number",
      onChange: (event) => handleChange(event, "soaPin"),
      value: rgData.soaPin,
    },
    {
      title: "Telephone",
      type: "number",
      onChange: (event) => handleChange(event, "soaTelNo"),
      value: rgData.soaTelNo,
    },
    {
      title: "Mobile",
      type: "number",
      onChange: (event) => handleChange(event, "soaMobNo"),
      value: rgData.soaMobNo,
    },
    {
      title: "Email Id",
      type: "email",
      onChange: (event) => handleChange(event, "soaEmail"),
      value: rgData.soaEmail,
    },
    {
      title: "GST",
      type: "number",
      onChange: (event) => handleChange(event, "soaGst"),
      value: rgData.soaGst,
    },
  ];
  const roa = [
    {
      title: "Address",
      type: "text",
      onChange: (event) => handleChange(event, "roaAddress"),
      value: rgData.roaAddress,
    },
    {
      title: "District",
      type: "text",
      onChange: (event) => handleChange(event, "roaDist"),
      value: rgData.roaDist,
    },
    {
      title: "City",
      type: "text",
      onChange: (event) => handleChange(event, "roaCity"),
      value: rgData.roaCity,
    },
    {
      title: "State/UT",
      type: "text",
      onChange: (event) => handleChange(event, "roaState"),
      value: rgData.roaState,
    },
    {
      title: "Pin code",
      type: "number",
      onChange: (event) => handleChange(event, "roaPin"),
      value: rgData.roaPin,
    },
    {
      title: "Telephone",
      type: "number",
      onChange: (event) => handleChange(event, "roaTelNo"),
      value: rgData.roaTelNo,
    },
    {
      title: "Mobile",
      type: "number",
      onChange: (event) => handleChange(event, "roaMobNo"),
      value: rgData.roaMobNo,
    },
    {
      title: "Email Id",
      type: "email",
      onChange: (event) => handleChange(event, "roaEmail"),
      value: rgData.roaEmail,
    },
    {
      title: "GST",
      type: "number",
      onChange: (event) => handleChange(event, "roaGst"),
      value: rgData.roaGst,
    },
  ];
  console.log(rgData);
  return (
    <div className="container">
      <section id="step-2" className="form-step">
        <h2 className="font-normal" style={{ color: "#00008B" }}>
          Scheme & Organization Detail
        </h2>
        <form className="row g-3 mt-3">
          <div className="form-group">
            <label for="exampleFormControlSelect2">Scheme</label>
            <select
              className="form-control"
              onChange={(event) => handleChange(event, "schId")}
              defaultValue={0}
            >
              <option value={0} disabled>
                {rgData.schId === 0 ? "--Select--" : rgData.schId}
              </option>
              {scheme.map((props, index) => (
                <option value={props.schemeId} key={index}>
                  {props.schemeName}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group" style={{ marginTop: "10px" }}>
            <label>Name of the Organization</label>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="Enter Organization Name"
              value={rgData.orgName}
              onChange={(event) => handleChange(event, "orgName")}
            />
          </div>

          <div className="form-group" style={{ marginTop: "10px" }}>
            <label for="exampleFormControlSelect2">
              Category of Organization
            </label>
            <select
              className="form-control"
              onChange={(event) => handleChange(event, "orgId")}
              defaultValue={0}
            >
              <option value={0} disabled>
                {rgData.orgId === 0 ? "--Select--" : rgData.orgId}
              </option>
              {org.map((props) => (
                <option value={props.orgId} key={props.orgId}>
                  {props.orgType}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group" style={{ marginTop: "10px" }}>
            <label>Affiliation / Accreditation</label>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="Enter Organization Name"
              value={rgData.affiliation}
              onChange={(event) => handleChange(event, "affiliation")}
            />
          </div>
          {/* <div className="form-group" style={{ marginTop: "10px" }}>
            <label>Date of Incorporation</label>
            <input
              className="form-control form-control-sm"
              type="date"
              placeholder="dd/mm/yyyy"
            />
          </div> */}
        </form>
        <form className="row g-3">
          <div className="col-sm-6">
            <div className="form-group mt-5 mb-4">
              <h4 className="text-center" style={{ color: "#00008B" }}>
                Registered Office Address
              </h4>
            </div>

            {roa.map((e) => (
              <div className="row mb-3">
                <label for="colFormLabel" className="col-sm-2 col-form-label">
                  {e.title}
                </label>
                <div className="col-sm-10">
                  <input
                    type={e.type}
                    className="form-control"
                    id="colFormLabel"
                    value={e.value}
                    onChange={e.onChange}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="col-sm-6">
            <div className="form-group mt-5 mb-4">
              <h4 className="text-center" style={{ color: "#00008B" }}>
                Regional/State Office Address
              </h4>
            </div>

            {soa.map((e) => (
              <div className="row mb-3">
                <label for="colFormLabel" className="col-sm-2 col-form-label">
                  {e.title}
                </label>
                <div className="col-sm-10">
                  <input
                    type={e.type}
                    className="form-control"
                    id="colFormLabel"
                    value={e.value}
                    onChange={e.onChange}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label">Website</label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail3"
                  value={rgData.website}
                  onChange={(event) => handleChange(event, "website")}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label">PAN Card</label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail3"
                  value={rgData.panCard}
                  onChange={(event) => handleChange(event, "panCard")}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label className="col-sm-2 col-form-label">PAN Number</label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  id="inputEmail3"
                  value={rgData.panNumber}
                  onChange={(event) => handleChange(event, "panNumber")}
                />
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};
