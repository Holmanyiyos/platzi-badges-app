import React from 'react';
import { BrowserRouter, Switch,Route } from 'react-router-dom';

import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import Homepage from '../pages/Homepage';
import NotFound from '../pages/NotFound';
import BadgeEdit from '../pages/BadgeEdit';
import BadgeView from '../pages/BadgeViewContainer';
import Layout from './Layout';

function App(){
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="platzi-badges-app/" component={Homepage}/>
                    <Route exact path="/badges" component={Badges}/>
                    <Route exact path="/badges/new" component={BadgeNew}/>
                    <Route exact path="/badges/:badgeId" component={BadgeView}/>
                    <Route exact path="/badges/:badgeId/edit" component={BadgeEdit}/>
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;