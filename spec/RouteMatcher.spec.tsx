
import * as React from 'react';
import {Route} from '../src/Route';
import renderer, {ReactTestRenderer} from 'react-test-renderer';
import {
    TestApp,
    VarView
} from './env/index';
import {instance} from './env/VarView';
import { Router } from '../src/Router';
import { RouterStrategy } from '../src/RouterStrategy';

const tick = function(fn: () => void): void {
    setTimeout(fn, 1);
};

describe('RouteMatcher', () => {
    let app: ReactTestRenderer | undefined;

    const router = (): ReactTestRenderer => {
        if (!app) {
            app = renderer.create(
                <Router component={TestApp}>
                    <Route key="page1" url="/page1/:var" component={VarView} index />
                </Router>
            );
        }

        return app;
    }

    beforeEach(() => {
        window.location.hash = '/page1';
        app = undefined;
    });
    
    it('can pass vars', (done) => {
        const comp: ReactTestRenderer = router();
        const r: RouterStrategy = Router.getInstance();
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
        const comp: ReactTestRenderer = router();
        const r: RouterStrategy = Router.getInstance();
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
        const comp: ReactTestRenderer = router();
        const r: RouterStrategy = Router.getInstance();
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
