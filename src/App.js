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
import "./App.css"

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
            <Route path="" element={<div>Dashboard</div>} />
            <Route
              path="projectManagement/addProject"
              element={<div>Add Project</div>}
            />
            <Route
              path="projectManagement/addAffiliation"
              element={<div>Add Affiliation</div>}
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
            <Route
              path="batchManagement/generateABN"
              element={<div>Generate ABN</div>}
            />
            <Route
              path="batchManagement/addBatch"
              element={<div>Add Batch</div>}
            />
            <Route
              path="batchManagement/addPhotos"
              element={<div>Add Photos</div>}
            />
            <Route
              path="batchManagement/dataCorrection"
              element={<div>Data Correction</div>}
            />
            <Route
              path="batchManagement/dataVerification"
              element={<div>Data Verification</div>}
            />
            <Route
              path="batchManagement/batchPayment"
              element={<div>Batch Payment</div>}
            />
            <Route
              path="batchManagement/batchStatusDetails"
              element={<div>Batch Status Details</div>}
            />
            <Route
              path="batchManagement/assessorDetails"
              element={<div>Assessor Details</div>}
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
