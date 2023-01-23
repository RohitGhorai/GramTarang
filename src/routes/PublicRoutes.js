// import React from "react";
// import Home from "../Pages/Home";
// import Tp_pia_map from "../Pages/tp_pia/Tp_pia_map";
// import Sna_map from "../Pages/sna/Sna_map";
// import Navbar from "../Components/Navbar";
// import { Route, Switch } from "react-router-dom";
// import Tp_form from "../Pages/tp_pia/Tp_regn";
// import Tp_pia_log_in from "../Pages/tp_pia/Tp_pia_log_in";

// function PublicRoutes() {
//   return (
//     <div className="App bg-#F9F1D9">
//         <Navbar />
//       <Switch>
//       <Route exact path="/" render={() => <Home/>} />
//         <Route exact path="/tp_pia_map" render={() =><Tp_pia_map />} />
//         <Route exact path="/tp_pia_log_in" render={() =><Tp_pia_log_in />} />
//         <Route exact path="/sna_map" render={() =><Sna_map />} />
//         <Route exact path="/tp_regn_form" render={() =><Tp_form />} />
//         {/* <Route path="/od.tp_pia" element={<Od />} /> */}
//       </Switch>
//     </div>
//   );
// }

// export default PublicRoutes;


import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from '../resources/slugs';

function PublicRoutes() {
    return (
        <Switch>
            <Route path={SLUGS.login} render={() => <div>login</div>} />
            <Route path={SLUGS.signup} render={() => <div>signup</div>} />
            <Route path={SLUGS.forgotPassword} render={() => <div>forgotPassword</div>} />
            <Redirect to={SLUGS.login} />
        </Switch>
    );
}

export default PublicRoutes;

