import React from "react";
import "./Tp_pia.css";

// function col_1(){
//   const row_1 = [
//     { label: "Address", type: "text" },
//     { label: "District", type: "text" },
//     { label: "City", type: "text" },
//     { label: "State/UT", type: "text" },
//     { label: "Pin code", type: "number" },
//   ];
//   return (
//     <>
//       {row_1.map((rows) => (
//         <div class="row mb-3">
//           <label for="colFormLabel" class="col-sm-2 col-form-label">
//             {rows.label}
//           </label>
//           <div class="col-sm-10">
//             <input
//               type={rows.type}
//               class="form-control"
//               id="colFormLabel"
//               placeholder="col-form-label"
//             />
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

function Tp_regn() {
  const row_1 = [
    { title: "Address", type: "text" },
    { title: "District", type: "text" },
    { title: "City", type: "text" },
    { title: "State/UT", type: "text" },
    { title: "Pin code", type: "number" },
  ];

  /**
   * Define a function to navigate betweens form steps.
   * It accepts one parameter. That is - step number.
   */
  const navigateToFormStep = (stepNumber) => {
    /**
     * Hide all form steps.
     */
    document.querySelectorAll(".form-step").forEach((formStepElement) => {
      formStepElement.classList.add("d-none");
    });
    /**
     * Mark all form steps as unfinished.
     */
    document
      .querySelectorAll(".form-stepper-list")
      .forEach((formStepHeader) => {
        formStepHeader.classList.add("form-stepper-unfinished");
        formStepHeader.classList.remove(
          "form-stepper-active",
          "form-stepper-completed"
        );
      });
    /**
     * Show the current form step (as passed to the function).
     */
    document.querySelector("#step-" + stepNumber).classList.remove("d-none");
    /**
     * Select the form step circle (progress bar).
     */
    const formStepCircle = document.querySelector(
      'li[step="' + stepNumber + '"]'
    );
    /**
     * Mark the current form step as active.
     */
    formStepCircle.classList.remove(
      "form-stepper-unfinished",
      "form-stepper-completed"
    );
    formStepCircle.classList.add("form-stepper-active");
    /**
     * Loop through each form step circles.
     * This loop will continue up to the current step number.
     * Example: If the current step is 3,
     * then the loop will perform operations for step 1 and 2.
     */
    for (let index = 0; index < stepNumber; index++) {
      /**
       * Select the form step circle (progress bar).
       */
      const formStepCircle = document.querySelector('li[step="' + index + '"]');
      /**
       * Check if the element exist. If yes, then proceed.
       */
      if (formStepCircle) {
        /**
         * Mark the form step as completed.
         */
        formStepCircle.classList.remove(
          "form-stepper-unfinished",
          "form-stepper-active"
        );
        formStepCircle.classList.add("form-stepper-completed");
      }
    }
  };
  /**
   * Select all form navigation buttons, and loop through them.
   */
  document
    .querySelectorAll(".btn-navigate-form-step")
    .forEach((formNavigationBtn) => {
      /**
       * Add a click event listener to the button.
       */
      formNavigationBtn.addEventListener("click", () => {
        /**
         * Get the value of the step.
         */
        const stepNumber = parseInt(
          formNavigationBtn.getAttribute("step_number")
        );
        /**
         * Call the function to navigate to the target form step.
         */
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
          <section id="step-1" className="form-step">
            <h2 className="font-normal" style={{ color: "#00008B" }}>
              Accept T&C
            </h2>
            <h7 className="text-uppercase" style={{ color: "#00008B" }}>
              Please read the instructions carefully before proceeding.
            </h7>
            <hr />
            <div className="container form-group">
              <h6 style={{ color: "#8B0000" }}>
                Centurion University of Technology and Management Skill
                Assessment & Certification
              </h6>
              <hr />
              <p style={{ color: "#00008B" }}>
                <b>Training Partner on Boarding Application:</b>
              </p>

              <span style={{ color: "#00008B" }}>
                <h7 className="text-uppercase">Instruction to the applicant</h7>
                <p>
                  1. Kindly go through the form thoroughly before filling it up.
                  <br />
                  2. It may be noted that the 'Applicant' here refers to the
                  main promoter/ partner who would run the day operations of the
                  proposed Training Centre.
                  <br />
                  3. This application should be filled in English language only,
                  either by typing or in block letters with black ink.
                  <br />
                  4. All the financial information should be mentioned INR.
                </p>
              </span>
              <br />
              <div class="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label className="form-check-label" for="flexCheckChecked">
                  I/We agree with the terms and conditions.
                </label>
              </div>
            </div>

            <div className="mt-3" style={{ textAlign: "right" }}>
              <button
                className="button btn-navigate-form-step"
                type="button"
                step_number="2"
              >
                Next
              </button>
            </div>
          </section>
          <section id="step-2" className="form-step d-none">
            <h2 className="font-normal" style={{ color: "#00008B" }}>
              Scheme & Organization Detail
            </h2>
            <form>
              <div className="form-group">
                <label for="exampleFormControlSelect2">Scheme</label>
                <select class="form-control">
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
                  class="form-control form-control-sm"
                  type="text"
                  placeholder="Enter Organization Name"
                />
              </div>
              <div className="form-group" style={{ marginTop: "10px" }}>
                <label for="exampleFormControlSelect2">
                  Category of Organization
                </label>
                <select class="form-control">
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
                  class="form-control form-control-sm"
                  type="text"
                  placeholder="Enter Organization Name"
                />
              </div>
              <div className="form-group" style={{ marginTop: "10px" }}>
                <label>DAte of Incorporation</label>
                <input
                  class="form-control form-control-sm"
                  type="date"
                  placeholder="dd/mm/yyyy"
                />
              </div>
            </form>
            <form className="row g-3">
              <div class="col-sm-6">
                <div class="form-group">
                  <h2 class="text-center">Sample Form</h2>
                </div>
                {row_1.map((rows) => (
                  <div class="row mb-3">
                    <label for="colFormLabel" class="col-sm-2 col-form-label">
                      {rows.title}
                    </label>
                    <div class="col-sm-10">
                      <input
                        type={rows.type}
                        class="form-control"
                        id="colFormLabel"
                        placeholder="col-form-label"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <h2 class="text-center">Sample Form</h2>
                </div>
                <col_1 />
              </div>
            </form>

            <div className="mt-3">
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
          <section id="step-3" className="form-step d-none">
            <h2 className="font-normal">Social Profiles</h2>
            <div className="mt-3">Step 2 input fields goes here..</div>
            <div className="mt-3">
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
                step_number="4"
              >
                Next
              </button>
            </div>
          </section>
          <section id="step-4" className="form-step d-none">
            <h2 className="font-normal">Personal Details</h2>
            <div className="mt-3">Step 3 input fields goes here..</div>
            <div className="mt-3">
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
        </form>
      </div>
    </div>
  );
}

export default Tp_regn;
