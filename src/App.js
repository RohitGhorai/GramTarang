import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import SnaMap from "./Pages/sna/sna-map";
import TpMap from "./Pages/tp_pia/tp-map";
import { Tp_regn } from "./Pages/tp_pia/tp-regn";
import PrivateRoute from "./routes/PrivateRoute";
import SLUGS from "./resources/slugs";
import AddCenter from "./routes/dashboard/centerManagement/addCenter";
import ViewAllCenters from "./routes/dashboard/centerManagement/viewAllCenters";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import UserProvider from "./context/UserProvider";
import Login from "./Pages/Login";
import { ToastContainer } from "react-toastify";
import "./App.css";
import DashboardComponent from "./routes/dashboard/DashboardComponent";
import AddProject from "./routes/dashboard/projectManagement/AddProject";
import AddAffiliation from "./routes/dashboard/projectManagement/AddAffiliation";
import {
  AddBatch,
  AddPhotos,
  AssignABN,
  Pay,
  UploadPhoto,
  VerifyPay,
} from "./routes/dashboard/batchManagement/index";
import AddNewTrainingCenter from "./routes/dashboard/projectManagement/AddNewTrainingCenter";

function App() {
  return (
    <UserProvider>
      <Router>
        <ToastContainer
          toastStyle={{
            backgroundColor: "black",
            WebkitTextFillColor: "#fff",
          }}
          position="bottom-center"
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tp_pia_map" element={<TpMap />} />
          <Route path="/log_in" element={<Login />} />
          <Route path="/sna_map" element={<SnaMap />} />
          <Route path="/tp_regn_form" element={<Tp_regn />} />

          <Route path={SLUGS.dashboard} element={<PrivateRoute />}>
            <Route path="" element={<DashboardComponent />} />
            <Route
              path="projectManagement/addProject"
              element={<AddProject />}
            />
            <Route
              path="projectManagement/addAffiliation"
              element={<AddAffiliation/>}
            />
            <Route
              path="projectManagement/addAffiliation/add"
              element={<AddNewTrainingCenter/>}
            />
            <Route
              path="projectManagement/viewAllProjects"
              element={<div>View All Projects</div>}
            />
            <Route
              path="centerManagement/addOperationalState"
              element={<div>Add Operational State</div>}
            />
            <Route
              path="centerManagement/addCenterDetails"
              element={<AddCenter />}
            />
            <Route
              path="centerManagement/viewAllCenters"
              element={<ViewAllCenters />}
            />
            <Route path="batchManagement/assignABN" element={<AssignABN />} />
            <Route path="batchManagement/addBatch" element={<AddBatch />} />
            <Route path="batchManagement/addPhotos" element={<AddPhotos />} />
            <Route
              path="batchManagement/addPhotos/studentData"
              element={<UploadPhoto />}
            />
            <Route path="batchManagement/verify&pay" element={<VerifyPay />} />
            <Route path="batchManagement/verify&pay/pay" element={<Pay />} />
            <Route
              path="batchManagement/viewBatchDetails"
              element={<div>Batch Details</div>}
            />
            <Route
              path="profileManagement"
              element={<div>profile Management</div>}
            />
            <Route path="settings" element={<div>Settings</div>} />
          </Route>
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
