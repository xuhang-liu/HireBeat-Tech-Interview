
import React from 'react';
import { Provider } from 'react-redux';

// Load font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faBell, faUser);

// Load the redux store
import { createAppStore } from '../components/state/stores/AppStore';

// Load the router
import { AppRouter } from './routers/AppRouter';

export const App = () => (
    <Provider store={createAppStore()}>
        <AppRouter />
    </Provider>
);