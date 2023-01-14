import React from "react";
import Process_1 from "./Tp_regn_process_1";
import Process_2 from "./Tp_regn_process_2";
import Process_3 from "./Tp_regn_process_3";
import Process_4 from "./Tp_regn_process_4";
import "./Tp_pia.css";

const Tp_regn = () => {
  const navigateToFormStep = (stepNumber) => {
    document.querySelectorAll(".form-step").forEach((formStepElement) => {
      formStepElement.classList.add("d-none");
    });

    document
      .querySelectorAll(".form-stepper-list")
      .forEach((formStepHeader) => {
        formStepHeader.classList.add("form-stepper-unfinished");
        formStepHeader.classList.remove(
          "form-stepper-active",
          "form-stepper-completed"
        );
      });

    document.querySelector("#step-" + stepNumber).classList.remove("d-none");

    const formStepCircle = document.querySelector(
      'li[step="' + stepNumber + '"]'
    );

    formStepCircle.classList.remove(
      "form-stepper-unfinished",
      "form-stepper-completed"
    );
    formStepCircle.classList.add("form-stepper-active");

    for (let index = 0; index < stepNumber; index++) {
      const formStepCircle = document.querySelector('li[step="' + index + '"]');

      if (formStepCircle) {
        formStepCircle.classList.remove(
          "form-stepper-unfinished",
          "form-stepper-active"
        );
        formStepCircle.classList.add("form-stepper-completed");
      }
    }
  };

  document
    .querySelectorAll(".btn-navigate-form-step")
    .forEach((formNavigationBtn) => {
      formNavigationBtn.addEventListener("click", () => {
        const stepNumber = parseInt(
          formNavigationBtn.getAttribute("step_number")
        );

        navigateToFormStep(stepNumber);
      });
    });
  return (
    <div className="container" style={{ marginTop: "8%" }}>
      <div id="multi-step-form-container">
        <ul className="form-stepper form-stepper-horizontal text-center mx-auto pl-0">
          <li
            className="form-stepper-active text-center form-stepper-list"
            step="1"
          >
            <a className="mx-2">
              <span className="form-stepper-circle">
                <span>1</span>
              </span>
              <div className="label" style={{ fontSize: "14px" }}>
                Accept T&C
              </div>
            </a>
          </li>
          <li
            className="form-stepper-unfinished text-center form-stepper-list"
            step="2"
          >
            <a className="mx-2">
              <span className="form-stepper-circle text-muted">
                <span>2</span>
              </span>
              <div className="label text-muted" style={{ fontSize: "14px" }}>
                Scheme & Organization Detail
              </div>
            </a>
          </li>
          <li
            className="form-stepper-unfinished text-center form-stepper-list"
            step="3"
          >
            <a className="mx-2">
              <span className="form-stepper-circle text-muted">
                <span>3</span>
              </span>
              <div className="label text-muted" style={{ fontSize: "14px" }}>
                Head Owner Details
              </div>
            </a>
          </li>
          <li
            className="form-stepper-unfinished text-center form-stepper-list"
            step="4"
          >
            <a className="mx-2">
              <span className="form-stepper-circle text-muted">
                <span>4</span>
              </span>
              <div className="label text-muted" style={{ fontSize: "14px" }}>
                Project Contact Person Details
              </div>
            </a>
          </li>
        </ul>
        <form
          id="userAccountSetupForm"
          name="userAccountSetupForm"
          enctype="multipart/form-data"
          method="POST"
        >
          <Process_1 />
          <Process_2 />
          <Process_3 />
          <Process_4 />
        </form>
      </div>
    </div>
  );
};

export default Tp_regn;
