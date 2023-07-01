import * as React from "react";

export const TpRegnProcess_3 = ({ rgData, setRgData }) => {
  const [input, setInput] = React.useState({
    hoName: "",
    hoQualification: "",
    hoDob: "",
    hoExp: "",
    hoCitizen: "",
    hoPanNumber: "",
    hoResAddress: "",
    hoPermAddress: "",
    hoPhNumber: "",
    hoAltPhNumber: "",
    hoAadharNumber: "",
    hoAltAadharNumber: "",
    hoEmail: "",
    hoPr1: "",
    hoPr2: "",
    hoPr3: "",
  });

  const handleChange = (event, field) => {
    const value = event.target.value;
    setInput({ ...input, [field]: value });
    setRgData({ ...rgData, [field]: value });
  };

  const HO_Detail = [
    {
      title: "Name",
      type: "text",
      onchange: (event) => handleChange(event, "hoName"),
      value: rgData.hoName,
    },
    {
      title: "Educational Qualification",
      type: "text",
      onchange: (event) => handleChange(event, "hoQualification"),
      value: rgData.hoQualification,
    },
    {
      title: "Date of Birth",
      type: "date",
      onchange: (event) => handleChange(event, "hoDob"),
      value: rgData.hoDob,
    },
    {
      title: "Total Work Experience",
      type: "text",
      onchange: (event) => handleChange(event, "hoExp"),
      value: rgData.hoExp,
    },
    {
      title: "Citizenship",
      type: "text",
      onchange: (event) => handleChange(event, "hoCitizen"),
      value: rgData.hoCitizen,
    },
    {
      title: "PAN Number",
      type: "number",
      onchange: (event) => handleChange(event, "hoPanNumber"),
      value: rgData.hoPanNumber,
    },
    {
      title: "Residence Address",
      type: "text",
      onchange: (event) => handleChange(event, "hoResAddress"),
      value: rgData.hoResAddress,
    },
    {
      title: "Permanent Address",
      type: "text",
      onchange: (event) => handleChange(event, "hoPermAddress"),
      value: rgData.hoPermAddress,
    },
    {
      title: "Mobile Number",
      type: "number",
      onchange: (event) => handleChange(event, "hoPhNumber"),
      value: rgData.hoPhNumber,
    },
    {
      title: "Alt. Mobile Number",
      type: "number",
      onchange: (event) => handleChange(event, "hoAltPhNumber"),
      value: rgData.hoAltPhNumber,
    },
    {
      title: "Aadhar Number",
      type: "number",
      onchange: (event) => handleChange(event, "hoAadharNumber"),
      value: rgData.hoAadharNumber,
    },
    {
      title: "Aadhar Number(Optional)",
      type: "number",
      onchange: (event) => handleChange(event, "hoAltAadharNumber"),
      value: rgData.hoAltAadharNumber,
    },
    {
      title: "Email",
      type: "email",
      onchange: (event) => handleChange(event, "hoEmail"),
      value: rgData.hoEmail,
    },
  ];

  return (
    <div className="container">
      <div className="container">
        <section id="step-3" className="form-step">
          <h2 className="font-normal" style={{ color: "#00008B" }}>
            Head Owner Details
          </h2>
          <form className="row g-3 mt-3">
            {HO_Detail.map((e) => (
              <div className="col-sm-6">
                <div className="row">
                  <label
                    htmlFor="colFormLabel"
                    className="col-sm-2 col-form-label"
                  >
                    {e.title}
                  </label>
                  <div className="col-sm-10">
                    <input
                      type={e.type}
                      className="form-control"
                      id="colFormLabel"
                      onChange={e.onchange}
                      value={e.value}
                    />
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-4">
              <h4
                className="text-center mt-2 mb-3"
                style={{ color: "#00008B" }}
              >
                Other Promoter Details
              </h4>
              <div className="row mb-3">
                <label
                  htmlFor="inputText3"
                  className="col-sm-2 col-form-label"
                >
                  Promoter 1
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputText3"
                    onChange={(event) => handleChange(event, "hoPr1")}
                    value={rgData.hoPr1}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label
                  htmlFor="inputText3"
                  className="col-sm-2 col-form-label"
                >
                  Promoter 2
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputText3"
                    onChange={(event) => handleChange(event, "hoPr2")}
                    value={rgData.hoPr2}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label
                  htmlFor="inputText3"
                  className="col-sm-2 col-form-label"
                >
                  Promoter 3
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputText3"
                    onChange={(event) => handleChange(event, "hoPr3")}
                    value={rgData.hoPr3}
                  />
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};
