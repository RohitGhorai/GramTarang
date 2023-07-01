import * as React from "react";
import { Form, FormElement } from "@progress/kendo-react-form";
import { Button } from "@progress/kendo-react-buttons";
import { Stepper } from "@progress/kendo-react-layout";
import { TpRegnProcess_1 } from "./tp-regn-process-1";
import { TpRegnProcess_2 } from "./tp-regn-process-2";
import { TpRegnProcess_3 } from "./tp-regn-process-3";
import { TpRegnProcess_4 } from "./tp-regn-process-4";
import { useNavigate, useParams } from "react-router-dom";
import { signup } from "../../services/user-service";
import { toast } from "react-toastify";

export const Tp_regn = () => {
  const navigate = useNavigate();
  const [check, setCheck] = React.useState(false);
  const [rgData, setRgData] = React.useState({
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
  const stepPages = [
    <TpRegnProcess_1 check={check} setCheck={setCheck} />,
    <TpRegnProcess_2 rgData={rgData} setRgData={setRgData} />,
    <TpRegnProcess_3 rgData={rgData} setRgData={setRgData} />,
    <TpRegnProcess_4 rgData={rgData} setRgData={setRgData} />,
  ];

  const [step, setStep] = React.useState(0);
  const [formState, setFormState] = React.useState({});
  const [steps, setSteps] = React.useState([
    {
      label: "Accept T&C",
      isValid: undefined,
    },
    {
      label: "Scheme & Organization Detail",
      isValid: undefined,
    },
    {
      label: "Head Owner Details",
      isValid: undefined,
    },
    {
      label: "Project Contact Person Details",
      isValid: undefined,
    },
  ]);
  const lastStepIndex = steps.length - 1;
  const isLastStep = lastStepIndex === step;
  const isPreviousStepsValid =
    steps
      .slice(0, step)
      .findIndex((currentStep) => currentStep.isValid === false) === -1;
  const onStepSubmit = React.useCallback(
    (event) => {
      const { isValid, values } = event;
      const currentSteps = steps.map((currentStep, index) => ({
        ...currentStep,
        isValid: index === step ? isValid : currentStep.isValid,
      }));
      setSteps(currentSteps);
      setStep(() => Math.min(step + 1, lastStepIndex));
      setFormState(values);
      if (isLastStep && isPreviousStepsValid && isValid) {
        // alert(JSON.stringify(values));
        signup(rgData)
          .then((data) => {
            console.log("Register successful !!");
            toast.success("Register successful !!");
          })
          .catch((err) => {
            console.log(err);
            toast.error("Something is wrong !! Try again later...");
          });
        navigate("/");
      }
    },
    [steps, isLastStep, isPreviousStepsValid, step, lastStepIndex]
  );
  const onPrevClick = React.useCallback(
    (event) => {
      event.preventDefault();
      setStep(() => Math.max(step - 1, 0));
    },
    [step, setStep]
  );
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Stepper value={step} items={steps} style={{ marginTop: "50px" }} />
      <Form
        initialValues={formState}
        onSubmitClick={onStepSubmit}
        render={(formRenderProps) => (
          <div
            style={{
              alignSelf: "center",
            }}
          >
            <FormElement
              style={{
                width: "100%",
                marginTop: "50px",
              }}
            >
              {stepPages[step]}
              <span
                style={{
                  marginTop: "40px",
                }}
                className={"k-form-separator"}
              />
              <div
                style={{
                  justifyContent: "space-between",
                  alignContent: "center",
                }}
                className={
                  "k-form-buttons k-button k-button-md k-rounded-md k-button-solid k-button-solid-bases-end"
                }
              >
                <span
                  style={{
                    alignSelf: "center",
                  }}
                >
                  Step {step + 1} of 4
                </span>
                <div>
                  {step !== 1 && step !== 0 ? (
                    <Button
                      className="btn btn-secondary"
                      style={{
                        marginRight: "16px",
                        paddingLeft: "30px",
                        paddingRight: "30px",
                      }}
                      onClick={onPrevClick}
                    >
                      Previous
                    </Button>
                  ) : undefined}
                  {check && (
                    <Button
                      className="btn btn-primary"
                      style={{ paddingLeft: "30px", paddingRight: "30px" }}
                      disabled={isLastStep ? !isPreviousStepsValid : false}
                      onClick={formRenderProps.onSubmit}
                    >
                      {isLastStep ? "Submit" : "Next"}
                    </Button>
                  )}
                </div>
              </div>
            </FormElement>
          </div>
        )}
      />
    </div>
  );
};
