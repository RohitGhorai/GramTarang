import React from "react";
import Sna_map from "./Pages/sna/sna-map";
import Tp_pia_log_in from "./Pages/tp_pia/tp-login";
import Tp_pia_map from "./Pages/tp_pia/tp-map";
import { Tp_regn } from "./Pages/tp_pia/tp-regn";
import PrivateSection from "./routes/PrivateSection";
// import PrivateRoutes from "./routes/PrivateRoutes";
import SLUGS from "./resources/slugs";
import AddCenter from "./routes/dashboard/centerManagement/addCenter";
import ViewAllCenters from "./routes/dashboard/centerManagement/viewAllCenters";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tp_pia_map" element={<Tp_pia_map />} />
        <Route path="/tp_log_in" element={<Tp_pia_log_in />} />
        <Route path="/sna_map" element={<Sna_map />} />
        <Route path="/tp_regn_form" element={<Tp_regn />} />

        <Route path={SLUGS.dashboard} element={<PrivateSection />}>
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
          <Route
            path="settings"
            element={<div>Settings</div>}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
