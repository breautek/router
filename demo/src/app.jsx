
import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Route,
    version,
    TransitionSlide
} from '@breautek/router';

import {Page1} from './Page1';
import {Page2} from './Page2';
import {Page3} from './Page3';

var slide = new TransitionSlide();

ReactDOM.render(
    <Router>
        <Route key="test1" path="/test1" component={Page1} transition={slide} index />
        <Route key="test2" path="/test2" component={Page2} transition={slide} />
    </Router>,
    document.getElementById('app')
);