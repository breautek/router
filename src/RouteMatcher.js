'use strict';

import {URLParser} from './URLParser';
import {cloneElement} from 'react';
import {Route} from './Route';
import {RouterStrategy} from './RouterStrategy';

export class RouteMatcher {
    /**
     * 
     * @param {RouterStrategy} routerStrategy 
     */
    constructor(routerStrategy) {
        this.routerStrategy = routerStrategy;
    }

    /**
     * 
     * @param {string} url 
     * @param {Array<Route>} children 
     * @param {string} base The parents url
     * @param {Route} [indexRoute]
     */
    match(url, children, base, indexRoute) {
        var componentToRender = null;
        for (var i = 0; i < children.length; i++) {
            var route = children[i];
            var allowPartialMatching = !!route.props.children;
            var parser = new URLParser(base + route.props.path, allowPartialMatching);
            var params = parser.parse(url);
            if (params) {
                componentToRender = route;
                break;
            }
        }

        if (!componentToRender) {
            componentToRender = indexRoute;
        }

        if (!componentToRender) {
            if (!base) {
                console.warn('No routes matched, and no index route available.');
            }
            return null;
        }

        var props = {
            url : url,
            base: base + componentToRender.props.path,
            matcher: this,
            transition: componentToRender.props.transition,
            componentProps: {
                url : url,
                router: this.routerStrategy
            }
        };

        if (params) {
            for (var i in params) {
                props.componentProps[i] = params[i];
            }
        }

        return cloneElement(componentToRender, props);
    }
};

export default RouteMatcher;
