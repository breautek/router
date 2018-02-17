
import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Route
} from '@breautek/router';

import {Page1} from './Page1';
import {Page2} from './Page2';
import {Page3} from './Page3';

ReactDOM.render(
    <Router>
        <Route path="/" component={Page1} index>
            <Route path="anotherPage" component={Page1} />
            <Route path="test/" component={Page2}>
                <Route path=":id" component={Page3} />
            </Route>
        </Route>
    </Router>,
    document.getElementById('app')
);