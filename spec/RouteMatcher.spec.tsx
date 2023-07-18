
import * as React from 'react';
import {Route} from '../src/Route';
import {
    act,
    render,
    RenderResult
} from '@testing-library/react'
import {
    TestApp,
    VarView
} from './env/index';
import {instance} from './env/VarView';
import { Router } from '../src/Router';
import { RouterStrategy } from '../src/RouterStrategy';

describe('RouteMatcher', () => {

    let rendered: RenderResult = null;

    const doRender = (): RenderResult => {
        const renderResult = render(
            <Router component={TestApp}>
                <Route key="page1" url="/page1/:var" component={VarView} index />
            </Router>
        );
        return renderResult;
    }

    beforeEach(() => {
        window.location.hash = '/page1';
        rendered = null;
    });

    afterEach(() => {
        rendered.unmount();
    })
    
    it('can pass vars', async () => {
        rendered = doRender();

        let r: RouterStrategy = Router.getInstance();

        act(() => {
            r.pushState('/page1/test');
        });
        
        expect(instance.getProps().var).toBe('test');
    });

    it('can pass vars with underscores', async () => {
        rendered = doRender();
        let r: RouterStrategy = Router.getInstance();
        
        act(() => {
            r.pushState('/page1/test_123');
        });

        expect(instance.getProps().var).toBe('test_123');
    });

    it('can pass vars with dots', async () => {
        rendered = doRender();

        let r: RouterStrategy = Router.getInstance();

        act(() => {
            r.pushState('/page1/3fQ.-64');
        });

        expect(instance.getProps().var).toBe('3fQ.-64');
    });
});
