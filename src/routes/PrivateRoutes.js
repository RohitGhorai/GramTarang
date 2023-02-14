import React, { Suspense, lazy } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import SLUGS from '../resources/slugs';
import AddCenter from './dashboard/centerManagement/addCenter';
import LoadingComponent from './../Components/loading/LoadingComponent';
import ViewAllCenters from './dashboard/centerManagement/viewAllCenters';

const DashboardComponent = lazy(() => import('./dashboard'));

function PrivateRoutes() {
    return (
        <Suspense fallback={<LoadingComponent loading />}>
            <Switch>
                <Route exact path={SLUGS.dashboard} component={DashboardComponent} />
                <Route exact path={SLUGS.projectManagementTwo} render={() => <div>projectManagementTwo</div>} />
                <Route exact path={SLUGS.projectManagementThree} render={() => <div>projectManagementThree</div>} />
                <Route exact path={SLUGS.projectManagementFour} render={() => <div>projectManagementFour</div>} />
                <Route exact path={SLUGS.centerManagementTwo} render={() => <div>centerManagementTwo</div>} />
                <Route exact path={SLUGS.centerManagementThree} render={() => <div><AddCenter/></div>} />
                <Route exact path={SLUGS.centerManagementFour} render={() => <div><ViewAllCenters/></div>} />
                <Route exact path={SLUGS.batchManagementTwo} render={() => <div>projectManagementTwo</div>} />
                <Route exact path={SLUGS.batchManagementThree} render={() => <div>projectManagementThree</div>} />
                <Route exact path={SLUGS.batchManagementFour} render={() => <div>projectManagementFour</div>} />
                <Route exact path={SLUGS.batchManagementFive} render={() => <div>projectManagementFive</div>} />
                <Route exact path={SLUGS.batchManagementSix} render={() => <div>projectManagementSix</div>} />
                <Route exact path={SLUGS.batchManagementSeven} render={() => <div>projectManagementSeven</div>} />
                <Route exact path={SLUGS.batchManagementEight} render={() => <div>projectManagementEight</div>} />
                <Route exact path={SLUGS.batchManagementNine} render={() => <div>projectManagementNine</div>} />
                <Route exact path={SLUGS.profileManagement} render={() => <div>profileManagement</div>} />
                
                <Redirect to={SLUGS.dashboard} />
            </Switch>
        </Suspense>
    );
}

export default PrivateRoutes;