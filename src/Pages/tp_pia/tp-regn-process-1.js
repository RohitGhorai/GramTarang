import * as React from "react";

export const TpRegnProcess_1 = ({ check, setCheck }) => {
  const handleChange = () => {
    setCheck(!check);
  };
  return (
    <div className="container">
      <section id="step-1" className="form-step">
        <h2 className="font-normal" style={{ color: "#00008B" }}>
          Accept T&C
        </h2>
        <p className="h7 text-uppercase mt-3" style={{ color: "#00008B" }}>
          Please read the instructions carefully before proceeding.
        </p>
        <hr />
        <div className="container form-group">
          <h6 style={{ color: "#8B0000" }}>
            Centurion University of Technology and Management Skill Assessment &
            Certification
          </h6>
          <hr />
          <p style={{ color: "#00008B" }}>
            <b>Training Partner on Boarding Application:</b>
          </p>

          <div
            style={{
              border: "1px solid #e5e5e5",
              height: "200px",
              overflow: "auto",
              padding: "10px",
            }}
          >
            <span style={{ color: "#00008B" }}>
              <p className="h7 text-uppercase">Instruction to the applicant</p>
              <p>
                1. Kindly go through the form thoroughly before filling it up.
                <br />
                2. It may be noted that the 'Applicant' here refers to the main
                promoter/ partner who would run the day operations of the
                proposed Training Centre.
                <br />
                3. This application should be filled in English language only,
                either by typing or in block letters with black ink.
                <br />
                4. All the financial information should be mentioned INR.
                <br />
                5. Multiple locations may be applied for an applicant must fill
                separate application form for each proposed Training Centre.
                <br />
                6. Please strike off the headings not relevant to your
                application.
                <br />
                7. Please attach documentary proofs as mentioned in the
                application form. Documentary proof requirement may be different
                for different establishments.
                <br />
                <br />
                <strong>ELIGIBILITY</strong>
                <br />
                Following applicants are eligible to apply:
                <br />
                <br />
                1. Training Institutes set up/ affiliated by Government:
                <br />
                2. Any educational/ training institute fulfilling any of the
                following criteria: it is/ TP of SEEKHO AUR KAMAO/ TP of State
                Funded Programme
                <br />
                3. Institutes approved under any Central Government skill
                training Schemes
                <br />
                4. Training delivery partners already affiliated to NSDC as
                non-funding partners.
                <br />
                5. Colleges/ Institutes affiliated to a university set up by
                Central or State/ UT government or recognized by University
                Grants Commission.
                <br />
                6. Schools / Institutes approved by Central or State Boards of
                Secondary Education (or equivalent) or Boards of Technical
                Education.
                <br />
                7. Any other institute set up by Central or State/ UT
                government/ Corporates/ CSR Trust/ International Institution.
                <br />
                8. In future, if the registration/affiliation of the institute
                is cancelled for any reason by the respective
                accrediting/registering/governing authority, then its
                registration as a training partner of CUTM would also stand
                cancelled.
                <br />
                <br />
                Training Institutes set up by Corporate:
                <br /> 1. Any educational/ training institute fulfilling any of
                the following criteria:
                <br /> 2. Institutes owned/ promoted by corporate
                <br /> 3. Institutes managed/ run by corporate Company/ Firm/
                Society/ Trust
                <br /> 4. Any of the above fulfilling any of the following
                criteria:
                <br /> 5. An organization providing training under Apprentices
                Act, 1961 for last one year from the date of submission of the
                application in their own or rented premises.
                <br /> 6. An organization registered in India, conducting
                business in the domain of skill development & training, having
                Permanent Income Tax Account Number (PAN) and Service Tax
                Registration Number and audited accounts of statements at least
                for last one year.
                <br />
                <br />
                ON BOARDING PROCEDURE
                <br />
                1. All Training Partners are required to submit duly filled in
                and signed application in the prescribed form along with
                prescribed application fee
                <br />
                2. All supporting documents, as given in the application form
                shall be submitted along with the application form
                <br />
                3. Application may be submitted by online and after submission
                the acknowledgement with Imported documents will seal and sign.
                The Same then will be submitted by post, courier or by hand for
                further action
                <br />
                4. Applicant may apply for more than one center through separate
                application forms.
                <br />
                5. Application will be processed at two levels:
                <br />
                6. Documentation level
                <br />
                7. Centre Verification
                <br />
                8. Agreement /MoU
                <br />
                9. AMASYS portal Login approval
                <br />
                <br />
                APPLICATION FORM For On Boarding
                <br />
                Application form for Registration/Affiliation/ Accreditation as
                a Training Partner/Assessment & Certification may be access at
                https://cutmams.in
                <br />
                <br />
                EVALUATION OF APPLICATION
                <br />
                <br />
                <br />
                1. CUTM shall evaluate all applications received, within a
                period of seven days from the date of receipt of the
                application.
                <br />
                2. CUTM may call for additional information, if required.
                <br />
                3. CUTM or its representative(s) may investigate the correctness
                of the information provided by the applicant.
                <br />
                4. The applicant may be called for a personal meeting/ interview
                with CUTM.
                <br />
                <br />
                APPLICATION FEE
                <br />
                <br />
                The applicant must submit a non-refundable process fees of
                Rs.1000.00 through Online mode.
                <br />
                <br />
                EVALUATION OF TRAINING CENTRE
                <br />
                1. On completion of the requirements for Affiliation/
                Accreditation, the applicant shall apply for evaluation of the
                training center.
                <br />
                2. CUTM expects training partner to have requisite
                infrastructure. This infrastructure may be
                owned/leased/organized by training partner.
                <br />
                3. CUTM or representative(s) nominated by CUTM shall arrange to
                evaluate the training center.
                <br />
                4. Fees payable against evaluation charges shall be non-
                refundable.
                <br />
                <br />
                <strong>CUTM Contact:</strong>
                <br />
                National Head- Skill Assessment & Certification
                <br />
                2nd Floor, Madhusudhan tower/ Diploma Building, Tower, CIT
                Campus
                <br />
                Centurion University of Technology & Management
                <br />
                At- Ramachandrapur, P.O. Jatni, Dist; Khurdha-752050, Odisha
                <br />
                satyabhusan.rath@cutm.ac.in
                <br />
                +91 9853001906
              </p>
            </span>
          </div>
          <br />
          <div
            className="form-check"
            style={{ alignItems: "center", display: "flex" }}
          >
            <input
              className="form-check-input"
              type="checkbox"
              onChange={handleChange}
              id="flexCheckChecked"
              style={{ marginRight: "10px" }}
            />
            <label className="form-check-label" for="flexCheckChecked">
              I/We agree with the terms and conditions.
            </label>
          </div>
        </div>
      </section>
    </div>
  );
};
