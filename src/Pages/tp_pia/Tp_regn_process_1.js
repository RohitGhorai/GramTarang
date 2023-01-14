import React from 'react'

function Tp_regn_process_1() {
  return (
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
  )
}

export default Tp_regn_process_1
