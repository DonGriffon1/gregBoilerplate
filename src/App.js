import React from 'react';
import {
    Provider, 
} from 'react-redux';

import IndexRoute from './routes';
import store from './store';

export default () => (
    <Provider store={store}>
        <IndexRoute />
    </Provider>
);