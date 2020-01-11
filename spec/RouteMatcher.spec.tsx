
import React from 'react';
import { mount} from 'enzyme';
import {Router} from '../src/Router';
import {Route} from '../src/Route';
import jasmineEnzyme from 'jasmine-enzyme';
import {RouteMatcher} from '../src/RouteMatcher';

import {
    TestApp,
    VarPage
} from './env';
import {_instance} from './env/VarPage';
import { getRouter } from '../src/Router';

var tick = function(fn) {
	setTimeout(fn, 1);
};

describe('RouteMatcher', () => {
    let app;

    const router = () => {
        if (!app) {
            app = mount(
                <Router component={TestApp}>
                    <Route key="page1" path="/page1/:var" component={VarPage} index />
                </Router>
            );
        }

        return app;
    }

    beforeEach(() => {
        jasmineEnzyme();
        window.location.hash = '/page1';
        app = undefined;
    });
    
    it('can pass vars', (done) => {
        var comp = router();
        var r = getRouter();
        tick(() => {
            r.pushState('/page1/test');
            tick(() => {
                expect(_instance.getProps().var).toBe('test');
                comp.unmount();
                done();
            });
        });
    });

    it('can pass vars with underscores', (done) => {
        var comp = router();
        var r = getRouter();
        tick(() => {
            r.pushState('/page1/test_123');
            tick(() => {
                expect(_instance.getProps().var).toBe('test_123');
                comp.unmount();
                done();
            });
        });
    });

    it('can pass vars with dots', (done) => {
        var comp = router();
        var r = getRouter();
        tick(() => {
            r.pushState('/page1/3fQ.-64');
            tick(() => {
                expect(_instance.getProps().var).toBe('3fQ.-64');
                comp.unmount();
                done();
            });
        });
    });
});
