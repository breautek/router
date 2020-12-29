
import * as React from 'react';
import renderer from 'react-test-renderer';
import * as Enzyme from 'enzyme';
import {Route} from '../src/Route';
// import jasmineEnzyme from 'jasmine-enzyme';

import {
    TestApp,
    VarView
} from './env/index';
import {instance} from './env/VarView';
import { Router } from '../src/Router';
import { RouterStrategy } from '../src/RouterStrategy';
import {RouterWrapper} from './support/RouterWrapper';

let tick = function(fn: Function): void {
    setTimeout(fn, 1);
};

describe('RouteMatcher', () => {
    let app: RouterWrapper;

    const router = (): RouterWrapper => {
        if (!app) {
            app = Enzyme.mount<Router>(
                <Router component={TestApp}>
                    <Route key="page1" url="/page1/:var" component={VarView} index />
                </Router>
            );
        }

        return app;
    }

    beforeEach(() => {
        // jasmineEnzyme();
        window.location.hash = '/page1';
        app = undefined;
    });
    
    it('can pass vars', (done) => {
        let comp: RouterWrapper = router();
        let r: RouterStrategy = Router.getInstance();
        tick(() => {
            r.pushState('/page1/test');
            tick(() => {
                expect(instance.getProps().var).toBe('test');
                comp.unmount();
                done();
            });
        });
    });

    it('can pass vars with underscores', (done) => {
        let comp: RouterWrapper = router();
        let r: RouterStrategy = Router.getInstance();
        tick(() => {
            r.pushState('/page1/test_123');
            tick(() => {
                expect(instance.getProps().var).toBe('test_123');
                comp.unmount();
                done();
            });
        });
    });

    it('can pass vars with dots', (done) => {
        let comp: RouterWrapper = router();
        let r: RouterStrategy = Router.getInstance();
        tick(() => {
            r.pushState('/page1/3fQ.-64');
            tick(() => {
                expect(instance.getProps().var).toBe('3fQ.-64');
                comp.unmount();
                done();
            });
        });
    });
});
