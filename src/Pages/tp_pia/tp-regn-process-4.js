import * as React from "react";

export const TpRegnProcess_4 = ({rgData, setRgData}) => {

  const [input, setInput] = React.useState({
    pcName: "",
    pcDesignation: "",
    pcResAddress: "",
    pcPermAddress: "",
    pcCitizen: "",
    pcPhNumber: "",
    pcAltPhNumber: "",
    pcEmail: "",
    pcAltEmail: "",
    userName: "",
  });

  const handleChange = (event, field) => {
    const value = event.target.value;
    setInput({ ...input, [field]: value });
    setRgData({ ...rgData, [field]: value });
  };

  const PC_Detail = [
    { title: "Name", type: "text", onchange: event => handleChange(event, "pcName"), value:rgData.pcName},
    { title: "Designation", type: "text" , onchange: event => handleChange(event, "pcDesignation"), value:rgData.pcDesignation},
    { title: "Resident Address", type: "text" , onchange: event => handleChange(event, "pcResAddress"), value:rgData.pcResAddress},
    { title: "Permanent Address", type: "text" , onchange: event => handleChange(event, "pcPermAddress"), value:rgData.pcPermAddress},
    { title: "Citizenship", type: "text" , onchange: event => handleChange(event, "pcCitizen"), value:rgData.pcCitizen},
    { title: "Mobile Number", type: "number" , onchange: event => handleChange(event, "pcPhNumber"), value:rgData.pcPhNumber},
    { title: "Alt. Mobile Number", type: "number" , onchange: event => handleChange(event, "pcAltPhNumber"), value:rgData.pcAltPhNumber},
    { title: "Email Id", type: "email" , onchange: event => handleChange(event, "pcEmail"), value:rgData.pcEmail},
    { title: "Alt. Email Id", type: "email" , onchange: event => handleChange(event, "pcAltEmail"), value:rgData.pcAltEmail},
    { title: "User Name", type: "text" , onchange: event => handleChange(event, "userName"), value:rgData.userName},
  ];

  return(
    <div className="container">
    {" "}
    <section id="step-4" className="form-step">
      <h2 className="font-normal" style={{ color: "#00008B" }}>
        Project Contact Personal Details
      </h2>
      <h4 className="text-center mt-3" style={{ color: "#00008B" }}>
        Regional/State Office
      </h4>
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
                  onChange={props.onchange}
                  value={props.value}
                />
              </div>
            </div>
          </div>
        ))}
      </form>
    </section>
  </div>
  )
}
