// import React from "react";
// import Process_1 from "./Tp_regn_process_1";
// import Process_2 from "./Tp_regn_process_2";
// import Process_3 from "./Tp_regn_process_3";
// import Process_4 from "./Tp_regn_process_4";
// import "./Tp_pia.css";

// const Tp_regn = () => {
//   const navigateToFormStep = (stepNumber) => {
//     document.querySelectorAll(".form-step").forEach((formStepElement) => {
//       formStepElement.classList.add("d-none");
//     });
  
//     document.querySelectorAll(".form-stepper-list").forEach((formStepHeader) => {
//       formStepHeader.classList.add("form-stepper-unfinished");
//       formStepHeader.classList.remove(
//         "form-stepper-active",
//         "form-stepper-completed"
//       );
//     });
  
//     document.querySelector("#step-" + stepNumber).classList.remove("d-none");
  
//     const formStepCircle = document.querySelector(
//       'li[step="' + stepNumber + '"]'
//     );
  
//     formStepCircle.classList.remove(
//       "form-stepper-unfinished",
//       "form-stepper-completed"
//     );
//     formStepCircle.classList.add("form-stepper-active");
  
//     for (let index = 0; index < stepNumber; index++) {
//       const formStepCircle = document.querySelector('li[step="' + index + '"]');
  
//       if (formStepCircle) {
//         formStepCircle.classList.remove(
//           "form-stepper-unfinished",
//           "form-stepper-active"
//         );
//         formStepCircle.classList.add("form-stepper-completed");
//       }
//     }
//   };
  
//   document
//     .querySelectorAll(".btn-navigate-form-step")
//     .forEach((formNavigationBtn) => {
//       formNavigationBtn.addEventListener("click", () => {
//         const stepNumber = parseInt(
//           formNavigationBtn.getAttribute("step_number")
//         );
  
//         navigateToFormStep(stepNumber);
//       });
//     });
//   return (
//     <div className="container">
//       <div id="multi-step-form-container">
//         <ul className="form-stepper form-stepper-horizontal text-center mx-auto pl-0">
//           <li
//             className="form-stepper-active text-center form-stepper-list"
//             step="1"
//           >
//             <a className="mx-2">
//               <span className="form-stepper-circle">
//                 <span>1</span>
//               </span>
//               <div className="label" style={{ fontSize: "14px" }}>
//                 Accept T&C
//               </div>
//             </a>
//           </li>
//           <li
//             className="form-stepper-unfinished text-center form-stepper-list"
//             step="2"
//           >
//             <a className="mx-2">
//               <span className="form-stepper-circle text-muted">
//                 <span>2</span>
//               </span>
//               <div className="label text-muted" style={{ fontSize: "14px" }}>
//                 Scheme & Organization Detail
//               </div>
//             </a>
//           </li>
//           <li
//             className="form-stepper-unfinished text-center form-stepper-list"
//             step="3"
//           >
//             <a className="mx-2">
//               <span className="form-stepper-circle text-muted">
//                 <span>3</span>
//               </span>
//               <div className="label text-muted" style={{ fontSize: "14px" }}>
//                 Head Owner Details
//               </div>
//             </a>
//           </li>
//           <li
//             className="form-stepper-unfinished text-center form-stepper-list"
//             step="4"
//           >
//             <a className="mx-2">
//               <span className="form-stepper-circle text-muted">
//                 <span>4</span>
//               </span>
//               <div className="label text-muted" style={{ fontSize: "14px" }}>
//                 Project Contact Person Details
//               </div>
//             </a>
//           </li>
//         </ul>
//         <form
//           id="userAccountSetupForm"
//           name="userAccountSetupForm"
//           method="POST"
//         >
//           <Process_1 />
//           <Process_2 />
//           <Process_3 />
//           <Process_4 />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Tp_regn;


import * as React from 'react';
import { Form, FormElement } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';
import { Stepper } from '@progress/kendo-react-layout';
import { TpRegnProcess_1 } from './Tp_regn_process_1';
import { TpRegnProcess_2 } from './Tp_regn_process_2';
import { TpRegnProcess_3 } from './Tp_regn_process_3';
import { TpRegnProcess_4 } from './Tp_regn_process_4';
const stepPages = [TpRegnProcess_1, TpRegnProcess_2, TpRegnProcess_3, TpRegnProcess_4];
export const Tp_regn = () => {
  const [step, setStep] = React.useState(0);
  const [formState, setFormState] = React.useState({});
  const [steps, setSteps] = React.useState([{
    label: 'Accept T&C',
    isValid: undefined
  }, {
    label: 'Scheme & Organization Detail',
    isValid: undefined
  }, {
    label: 'Head Owner Details',
    isValid: undefined
  },
  {
    label: 'Project Contact Person Details',
    isValid: undefined
  }]);
  const lastStepIndex = steps.length - 1;
  const isLastStep = lastStepIndex === step;
  const isPreviousStepsValid = steps.slice(0, step).findIndex(currentStep => currentStep.isValid === false) === -1;
  const onStepSubmit = React.useCallback(event => {
    const {
      isValid,
      values
    } = event;
    const currentSteps = steps.map((currentStep, index) => ({
      ...currentStep,
      isValid: index === step ? isValid : currentStep.isValid
    }));
    setSteps(currentSteps);
    setStep(() => Math.min(step + 1, lastStepIndex));
    setFormState(values);
    if (isLastStep && isPreviousStepsValid && isValid) {
      alert(JSON.stringify(values));
    }
  }, [steps, isLastStep, isPreviousStepsValid, step, lastStepIndex]);
  const onPrevClick = React.useCallback(event => {
    event.preventDefault();
    setStep(() => Math.max(step - 1, 0));
  }, [step, setStep]);
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    
  }}>
        <Stepper value={step} items={steps} style={{marginTop: "50px"}}/>
        <Form initialValues={formState} onSubmitClick={onStepSubmit} render={formRenderProps => <div style={{
      alignSelf: 'center'
    }} >
              <FormElement style={{
        width: "100%",marginTop: "50px"
      }}>
                {stepPages[step]}
                <span style={{
          marginTop: '40px'
        }} className={'k-form-separator'} />
                <div style={{
          justifyContent: 'space-between',
          alignContent: 'center'
        }} className={'k-form-buttons k-button k-button-md k-rounded-md k-button-solid k-button-solid-bases-end'}>
                  <span style={{
            alignSelf: 'center'
          }}>Step {step + 1} of 4</span>
                  <div>
                    {step !== 0 ? <Button className="btn btn-secondary" style={{
              marginRight: '16px', paddingLeft:"30px", paddingRight:"30px"
            }} onClick={onPrevClick}>
                                            Previous
                                          </Button> : undefined}
                    <Button className='btn btn-primary' style={{paddingLeft:"30px", paddingRight:"30px"}} disabled={isLastStep ? !isPreviousStepsValid : false} onClick={formRenderProps.onSubmit}>
                      {isLastStep ? 'Submit' : 'Next'}
                    </Button>
                  </div>
                </div>
              </FormElement>
            </div>} />
      </div>;
};