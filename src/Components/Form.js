import React from "react";

const Form = ({ heading, items }) => {
  return (
    <div
      className="card w-100 h-100 mt-4"
      style={{
        borderColor: "#fff",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
    >
      <span
        className="text-center mt-4 mb-3"
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          WebkitTextFillColor: "#51287f",
        }}
      >
        {heading}
      </span>
      <form action="/">
        {items.map((item, index) => (
          <div className="row">
            <div className="col-25">
              <label for="fname">{item.title}</label>
            </div>
            {item.title === "Country" ? (
              <div className="col-75">
                <select key={index} id="country" name="country">
                  <option value="australia">Australia</option>
                  <option value="canada">Canada</option>
                  <option value="usa">USA</option>
                </select>
              </div>
            ) : (
              <div className="col-75">
                <input
                  key={index}
                  type={item.type}
                  id={item.title}
                  name={item.title}
                  disabled={item.disabled}
                />
              </div>
            )}
          </div>
        ))}
        <div className="row text-center">
          <input
            type="submit"
            value="Save & Submit"
            className="text-center mt-4"
            style={{ width: "100%", margin: "auto" }}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
