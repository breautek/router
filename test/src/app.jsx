
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
        <Route path="/anotherPage" component={Page1} />
        <Route index path="/" component={Page1} />
        <Route path="/test" component={Page1} />
    </Router>,
    document.getElementById('app')
);