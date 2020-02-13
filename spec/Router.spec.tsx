
import * as React from 'react';
import * as Enzyme from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

import {
    TestApp,
    View1,
    View2,
    View3,
    View4,
    OuterView,
    InnerView
} from './env';

import {Router, getRouter} from '../src/Router';
import {Route} from '../src/Route';
import { RouterStrategy } from '../src/RouterStrategy';
import {RouterWrapper} from './support/RouterWrapper';

require('jasmine-sinon');

var tick = function(fn: Function): void {
    setTimeout(fn, 1);
};

var getTitle = function(): string {
    return document.head.getElementsByTagName('title')[0].innerHTML;
}

describe('@breautek/router', () => {
    let app: RouterWrapper;

    const router = (): RouterWrapper => {
        if (!app) {
            app = Enzyme.mount<Router>(
                <Router component={TestApp}>
                    <Route key="page1" url="/page1" component={View1} index />
                    <Route key="page2" url="/page2" component={View2} />
                    <Route key="page3" url="/page3" component={View3} />
                    <Route key="page4" url="/page4" component={View4} />
                </Router>
            );
        }

        return app;
    }

    beforeEach(() => {
        jasmineEnzyme();
        // document.head.removeChild(document.head.getElementsByTagName('title')[0]);
        window.location.hash = '/page1';
        app = undefined;
    });

    it('It renders index page', (done) => {
        let comp: RouterWrapper = router();
        expect(comp.html()).toBe('<div><div class="View"><span>View1</span></div></div>');
        tick(() => {
            expect(getTitle()).toBe('View1');
            comp.unmount();
            done();
        });
    });

    it('getRouter()', () => {
        expect(getRouter()).toBe(null);
        let comp: RouterWrapper = router();
        expect(comp.instance().state.strategy).toBe(getRouter());
        comp.unmount();
    });

    it('can navigate pages', (done) => {
        let comp: RouterWrapper = router();

        let r: RouterStrategy = getRouter();
        expect(r.getHistoryLength()).toBe(0);
        expect(r.canBack()).toBe(false);

        let __urlChange = (url: string) => {

            if (firstFire) {
                expect(getTitle()).toBe('View1');
                firstFire = false;
                return;
            }

            comp.state('strategy').removeURLChangeCallback(__urlChange);

            tick(() => {
                expect(getTitle()).toBe('View2');
                expect(url).toBe('/page2');
                expect(r.canBack()).toBe(true);
                expect(r.getHistoryLength()).toBe(2);
                expect(comp.html()).toBe('<div><div class="View"><span>View2</span></div></div>');

                comp.unmount();
                done();
            });
        };

        let firstFire: boolean = true;
        
        comp.state('strategy').addURLChangeCallback(__urlChange);

        tick(() => {
            r.pushState('/page2');	
        });
    });

    describe('subviews', () => {
        it('can render subviews', (done) => {
            app = Enzyme.mount<Router>(
                <Router component={TestApp}>
                    <Route key="outer" url="/outerView" component={OuterView} index>
                        <Route key="inner" url="/innerView" component={InnerView} />
                    </Route>
                </Router>
            );
    
            let r: RouterStrategy = getRouter();

            tick(() => {
                r.pushState('/outerView/innerView');
                tick(() => {
                    expect(app.html()).toBe('<div><div class="View"><div><div>Outer View</div><div class="View"><div>Inner View</div></div></div></div></div>'); 
                    app.unmount();
                    done();
                });
            });
        });
    });
});
