
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

import {Router, getRouter, IRouterProps} from '../src/Router';
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

    let props: IRouterProps = {
        component: TestApp
    };

    const router = (): RouterWrapper => {
        if (!app) {
            app = Enzyme.mount<Router>(
                <Router {...props}>
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
        window.location.hash = '/';
        app = undefined;
        props = {
            component: TestApp
        };
    });

    describe('on no routes', () => {
        it('It renders index page', (done) => {
            let comp: RouterWrapper = router();
            expect(comp.html()).toBe('<div class="app"><div class="View View1">View1</div></div>');
            tick(() => {
                expect(getTitle()).toBe('View1');
                comp.unmount();
                done();
            });
        });

        it('renders index through onNoRoute hook', (done) => {
            props.onNoRoute = (index: React.ReactElement, routes: React.ReactElement[]): React.ReactElement => {
                return index;
            };
            spyOn(props, 'onNoRoute').and.callThrough();

            let comp: RouterWrapper = router();
            expect(comp.html()).toBe('<div class="app"><div class="View View1">View1</div></div>');
            tick(() => {
                expect(props.onNoRoute).toHaveBeenCalled();
                expect(getTitle()).toBe('View1');
                comp.unmount();
                done();
            });
        });

        it('renders null for index through onNoRoute hook', (done) => {
            props.onNoRoute = (index: React.ReactElement, routes: React.ReactElement[]): React.ReactElement => {
                return null;
            };
            spyOn(props, 'onNoRoute').and.callThrough();
            spyOn(console, 'warn');

            let comp: RouterWrapper = router();
            expect(comp.html()).toBe('<div class="app"></div>');
            tick(() => {
                expect(props.onNoRoute).toHaveBeenCalled();
                expect(console.warn).toHaveBeenCalledWith('No routes matched, and no index route available.');
                comp.unmount();
                done();
            });
        });

        it('renders a different view for index through onNoRoute hook', (done) => {
            props.onNoRoute = (index: React.ReactElement, routes: React.ReactElement[]): React.ReactElement => {
                return routes[2]
            };
            spyOn(props, 'onNoRoute').and.callThrough();

            let comp: RouterWrapper = router();
            expect(comp.html()).toBe('<div class="app"><div class="View">View3</div></div>');
            tick(() => {
                expect(props.onNoRoute).toHaveBeenCalled();
                comp.unmount();
                done();
            });
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
                expect(comp.html()).toBe('<div class="app"><div class="View">View2</div></div>');

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
                    expect(app.html()).toBe('<div class="app"><div class="View"><div>Outer View</div><div class="View">Inner View</div></div></div>'); 
                    app.unmount();
                    done();
                });
            });
        });
    });
});
