
import * as React from 'react';
import renderer, {ReactTestRenderer} from 'react-test-renderer';
import {
    TestApp,
    View1,
    View2,
    View3,
    View4,
    OuterView,
    InnerView
} from './env';

import {Router, IRouterProps} from '../src/Router';
import {Route} from '../src/Route';
import { RouterStrategy } from '../src/RouterStrategy';

const tick = function(fn: () => void): void {
    setTimeout(fn, 1);
};

const getTitle = function(): string {
    return document.head.getElementsByTagName('title')[0].innerText;
}

describe('@breautek/router', () => {
    let app: ReactTestRenderer | undefined;

    let props: IRouterProps = {
        component: TestApp
    };

    const router = (): ReactTestRenderer => {
        if (!app) {
            app = renderer.create(
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
        window.location.hash = '/';
        app = undefined;
        props = {
            component: TestApp
        };
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe('on no routes', () => {
        it('It renders index page', (done) => {
            const comp: ReactTestRenderer = router();
            expect(comp.toJSON()).toMatchSnapshot();
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
            jest.spyOn(props, 'onNoRoute');

            const comp: ReactTestRenderer = router();
            expect(comp.toJSON()).toMatchSnapshot();
            tick(() => {
                expect(props.onNoRoute).toHaveBeenCalled();
                expect(getTitle()).toBe('View1');
                comp.unmount();
                done();
            });
        });

        it('renders null for index through onNoRoute hook', (done) => {
            props.onNoRoute = (index: React.ReactElement, routes: React.ReactElement[]): React.ReactElement | null => {
                return null;
            };
            jest.spyOn(props, 'onNoRoute');
            jest.spyOn(console, 'warn').mockImplementation(() => {});

            const comp: ReactTestRenderer = router();
            expect(comp.toJSON()).toMatchSnapshot();
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
            jest.spyOn(props, 'onNoRoute');

            const comp: ReactTestRenderer = router();
            expect(comp.toJSON()).toMatchSnapshot();
            tick(() => {
                expect(props.onNoRoute).toHaveBeenCalled();
                comp.unmount();
                done();
            });
        });
    });

    it('getInstance()', () => {
        expect(Router.getInstance()).toBe(null);
        const comp: ReactTestRenderer = router();

        // Ideally we want to ensure the internal state matches what is returned
        // in the public API, but Facebook testing mantra is to test props and
        // their behaviour of those props rather than concerning itself with
        // implementation details, which state is considered an implementation
        // detail of a component.
        // https://stackoverflow.com/a/61813414/4685664
        expect(Router.getInstance()).toBeInstanceOf(RouterStrategy);
        comp.unmount();
    });

    it('can navigate pages', (done) => {
        const comp: ReactTestRenderer = router();

        const r: RouterStrategy = Router.getInstance();
        expect(r.getHistoryLength()).toBe(0);
        expect(r.canBack()).toBe(false);

        const urlChange = (url: string) => {
            r.removeURLChangeCallback(urlChange);

            tick(() => {
                expect(getTitle()).toBe('View2');
                expect(url).toBe('/page2');
                expect(r.canBack()).toBe(true);
                expect(r.getHistoryLength()).toBe(2);
                expect(comp.toJSON()).toMatchSnapshot();

                comp.unmount();
                done();
            });
        };
        
        r.addURLChangeCallback(urlChange);
        tick(() => {
            r.pushState('/page2');
        });
    });

    it('URLChangeCallback should fire once per URL change', (done) => {
        const comp: ReactTestRenderer = router();
        const r: RouterStrategy = Router.getInstance();
        const onUrlChange = jest.fn();
        
        tick(() => {
            r.addURLChangeCallback(onUrlChange);
            r.pushState('/page');
            tick(() => {
                expect(onUrlChange).toHaveBeenCalledTimes(1);
                expect(onUrlChange).toHaveBeenCalledWith<[string]>('/page');
                comp.unmount();
                r.removeURLChangeCallback(onUrlChange);
                done();
            });
        });
    });

    describe('subviews', () => {
        it('can render subviews', (done) => {
            app = renderer.create(
                <Router component={TestApp}>
                    <Route key="outer" url="/outerView" component={OuterView} index>
                        <Route key="inner" url="/innerView" component={InnerView} />
                    </Route>
                </Router>
            );
    
            const r: RouterStrategy = Router.getInstance();

            tick(() => {
                r.pushState('/outerView/innerView');
                tick(() => {
                    expect(app.toJSON()).toMatchSnapshot();
                    app.unmount();
                    done();
                });
            });
        });
    });
});
