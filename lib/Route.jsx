'use strict';

import {Component, ReactNode, cloneElement} from 'react';
import RouteMatcher from './RouteMatcher';
import * as URLPattern from 'url-pattern';

class Route extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return this.getComponentsToRender(this);
    }

    getComponentsToRender(component) {
        var url = component.props.url;
        var base = component.props.base || '';

        var ViewComponent = component.props.component;
        var child;

        var routeComponent = component.props.matcher.match(url, this._getChildren(component), base);
        if (routeComponent) {
            child = this.getComponentsToRender(routeComponent);
        }

        return (
            <ViewComponent {...component.props.componentProps}>
                {child}
            </ViewComponent>
        );
    }

    _getChildren(component) {
        var children = null;

        if (!component) {
            component = this;
        }
        
        if (!component.props.children) {
            return [];
        }

		if (component.props.children instanceof Array) {
			children = component.props.children;
		}
		else {
			children = [component.props.children];
		}

		return children;
	}
}

export default Route;
export {
    Route
}
