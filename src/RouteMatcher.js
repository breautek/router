'use strict';

import {URLParser} from './URLParser';
import {cloneElement} from 'react';

export class RouteMatcher {
    constructor(routerStrategy) {
        this.routerStrategy = routerStrategy;
    }

    match(url, children, base, indexRoute) {
        var componentToRender = null;
        for (var i = 0; i < children.length; i++) {
            var route = children[i];
            var parser = new URLParser(route.props.path);
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
