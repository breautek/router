
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
import {Page4} from './Page4';

var slideUp = new TransitionSlide(TransitionSlide.SLIDE_UP);
var slideDown = new TransitionSlide(TransitionSlide.SLIDE_DOWN);
var slideLeft = new TransitionSlide(TransitionSlide.SLIDE_LEFT);
var slideRight = new TransitionSlide(TransitionSlide.SLIDE_RIGHT);

ReactDOM.render(
    <Router>
        <Route key="test1" path="/test1" component={Page1} transition={slideLeft} index />
        <Route key="test2" path="/test2" component={Page2} transition={slideUp} />
        <Route key="test3" path="/test3" component={Page3} transition={slideRight} />
        <Route key="test4" path="/test4" component={Page4} transition={slideDown} />
        {/*<Route key="test1" path="/test1" component={Page1} transition={slideLeft} index />
        <Route key="test2" path="/test2" component={Page2} transition={slideLeft} />
        <Route key="test3" path="/test3" component={Page3} transition={slideLeft} />
        <Route key="test4" path="/test4" component={Page4} transition={slideLeft} />*/}
    </Router>,
    document.getElementById('app')
);