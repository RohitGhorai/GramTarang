import React from "react";
import Tp_pia_map from "../Pages/tp_pia/Tp_pia_map";
import Sna_map from "../Pages/sna/Sna_map";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Tp_regn} from "../Pages/tp_pia/Tp_regn";
import Tp_pia_log_in from "../Pages/tp_pia/Tp_pia_log_in";
import Home from "../Pages/Home";
import PrivateSection from "./PrivateSection";
import SLUGS from "../resources/slugs";

function App() {
  return (
    <div className="App bg-#F9F1D9">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/tp_pia_map" render={() => <Tp_pia_map />} />
          <Route exact path="/tp_pia_log_in" render={() => <Tp_pia_log_in />} />
          <Route exact path="/sna_map" render={() => <Sna_map />} />
          <Route exact path="/tp_regn_form" render={() => <Tp_regn />} />
          <Route exact path="/dashboard" render={() => <PrivateSection />} />
          <Route
            exact
            path={SLUGS.overview}
            render={() => <div>overview</div>}
          />
          <Route
            exact
            path={SLUGS.tickets}
            render={() => <PrivateSection>tickets</PrivateSection>}
          />
          <Route
            exact
            path={SLUGS.ideasTwo}
            render={() => <PrivateSection>Ideas</PrivateSection>}
          />
          <Route
            exact
            path={SLUGS.contacts}
            render={() => <PrivateSection>contacts</PrivateSection>}
          />

          {/* <Route path="/od.tp_pia" element={<Od />} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
