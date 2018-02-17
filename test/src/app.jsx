
import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Route
} from '@breautek/router';

import {Page1} from './Page1';

// console.log(Router);

ReactDOM.render(
    <Router>
        <Route path="/" component={Page1} />
    </Router>,
    document.getElementById('app')
);