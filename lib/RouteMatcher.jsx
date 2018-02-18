'use strict';

import URLPattern from 'url-pattern';
import {cloneElement} from 'react';

export class RouteMatcher {
    constructor(routerStrategy) {
        this.routerStrategy = routerStrategy;
    }

    match(url, children, base, indexRoute) {
		var componentToRender = null;
		for (var i = 0; i < children.length; i++) {
			var route = children[i];
			var pattern = new URLPattern('*' + base + route.props.path + '*');
			var match = pattern.match(url);
			if (match) {
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
            componentProps: {
                url : url,
                router: this.routerStrategy
            }
        };

        if (match) {
            for (var i in match) {
                if (i === 'url' || i === '_') {
                    continue;
                }

                props.componentProps[i] = match[i];
            }
        }

        return cloneElement(componentToRender, props);
    }
};

export default RouteMatcher;
