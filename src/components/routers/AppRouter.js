import React, { Fragment } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';

import AuthPage from '../pages/auth/AuthPage';
import DashboardPage from '../pages/dashboard/DashboardPage';

class AppRouter extends React.Component {
    render() {
        return <BrowserRouter>
            <Fragment>
                <Switch>
                    <Route path='/' component={AuthPage} exact={true} />
                    <MainLayout path='/dashboard' component={DashboardPage}  exact={true} />
                </Switch>
            </Fragment>
        </BrowserRouter>;
    }
}

export { AppRouter };