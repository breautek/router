
import * as React from 'react';
import {
    act,
    render,
    RenderResult
} from '@testing-library/react'
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

const getTitle = function(): string {
    return document.head.getElementsByTagName('title')[0].innerText;
}

describe('@breautek/router', () => {
    let props: IRouterProps;
    let rendered: RenderResult = null;

    const doRender = (props: IRouterProps): RenderResult => {
        const renderResult = render(
            <Router {...(props as IRouterProps)}>
                <Route key="page1" url="/page1" component={View1} index />
                <Route key="page2" url="/page2" component={View2} />
                <Route key="page3" url="/page3" component={View3} />
                <Route key="page4" url="/page4" component={View4} />
            </Router>
        );
        return renderResult;
    }

    beforeEach(() => {
        rendered = null;
        props = {
            component: TestApp
        };
        window.location.hash = '/';
    });

    afterEach(() => {
        rendered.unmount();
    });

    describe('on no routes', () => {
        it('It renders index page', async () => {
            rendered = doRender(props);

            expect(rendered.container.innerHTML).toBe('<div class="app"><div class="View View1">View1</div></div>');
        });

        it('renders index through onNoRoute hook', async () => {
            props.onNoRoute = (index: React.ReactElement, routes: React.ReactElement[]): React.ReactElement => {
                return index;
            };
            
            jest.spyOn(props, 'onNoRoute');

            rendered = doRender(props);

            expect(rendered.container.innerHTML).toBe('<div class="app"><div class="View View1">View1</div></div>');
            
            expect(props.onNoRoute).toHaveBeenCalled();
            expect(getTitle()).toBe('View1');
        });

        it('renders null for index through onNoRoute hook', async () => {
            props.onNoRoute = (index: React.ReactElement, routes: React.ReactElement[]): React.ReactElement => {
                return null;
            };

            jest.spyOn(props, 'onNoRoute');
            jest.spyOn(console, 'warn').mockImplementation(() => {});

            rendered = doRender(props);

            expect(rendered.container.innerHTML).toBe('<div class="app"></div>');
            expect(props.onNoRoute).toHaveBeenCalled();
            expect(console.warn).toHaveBeenCalledWith('No routes matched, and no index route available.');
        });

        it('renders a different view for index through onNoRoute hook', async () => {
            props.onNoRoute = (index: React.ReactElement, routes: React.ReactElement[]): React.ReactElement => {
                return routes[2]
            };
            jest.spyOn(props, 'onNoRoute')

            rendered = doRender(props);

            expect(rendered.container.innerHTML).toBe('<div class="app"><div class="View">View3</div></div>');

            expect(props.onNoRoute).toHaveBeenCalled();
        });
    });

    it('getInstance()', () => {
        expect(Router.getInstance()).toBe(null);
        rendered = doRender(props);
        expect(Router.getInstance()).toBeInstanceOf(RouterStrategy);
    });

    it('can navigate pages', async () => {
        rendered = doRender(props);

        let r: RouterStrategy = Router.getInstance();
        expect(r.getHistoryLength()).toBe(0);
        expect(r.canBack()).toBe(false);

        let p: Promise<void> = new Promise((resolve, reject) => {
            let urlChange = (url: string) => {
                r.removeURLChangeCallback(urlChange);

                setTimeout(() => {
                    expect(getTitle()).toBe('View2');
                    expect(url).toBe('/page2');
                    expect(r.canBack()).toBe(true);
                    expect(r.getHistoryLength()).toBe(2);
                    expect(rendered.container.innerHTML).toBe('<div class="app"><div class="View">View2</div></div>');
                    resolve();
                }, 0);
            };
            
            r.addURLChangeCallback(urlChange);
        });

        act(() => {
            r.pushState('/page2');
        });

        return p;
    });

    it('URLChangeCallback should fire once per URL change', async () => {
        rendered = doRender(props);
        let r: RouterStrategy = Router.getInstance();
        let onUrlChange = jest.fn();
        
        r.addURLChangeCallback(onUrlChange);
        act(() => {
            r.pushState('/page');
        });
        
        expect(onUrlChange).toHaveBeenCalledTimes(1);
        expect(onUrlChange).toHaveBeenCalledWith<[string]>('/page');
        r.removeURLChangeCallback(onUrlChange);
    });

    describe('subviews', () => {
        it('can render subviews', async () => {
            rendered = render(
                <Router component={TestApp}>
                    <Route key="outer" url="/outerView" component={OuterView} index>
                        <Route key="inner" url="/innerView" component={InnerView} />
                    </Route>
                </Router>
            );
    
            let r: RouterStrategy = Router.getInstance();

            act(() => {
                r.pushState('/outerView/innerView');
            });
            
            expect(rendered.container.innerHTML).toBe('<div class="app"><div class="View"><div>Outer View</div><div class="View">Inner View</div></div></div>');
        });
    });

    describe('view mounting hooks', () => {
        it('will invoke mout and unmount hooks', () => {
            rendered = doRender(props);

            let r: RouterStrategy = Router.getInstance();
            let onMount = jest.fn();
            let onUnmount = jest.fn();

            r.addViewMountCallback(onMount);
            r.addViewUnmountCallback(onUnmount);

            expect(r.getHistoryLength()).toBe(0);
            expect(r.canBack()).toBe(false);

            act(() => {
                r.pushState('/page2');
            });

            expect(onUnmount.mock.lastCall[0]).toBeInstanceOf(View1);
            expect(onMount.mock.lastCall[0]).toBeInstanceOf(View2);

            act(() => {
                r.pushState('/page3');
            });

            expect(onUnmount.mock.lastCall[0]).toBeInstanceOf(View2);
            expect(onMount.mock.lastCall[0]).toBeInstanceOf(View3);
        });
    });
});
