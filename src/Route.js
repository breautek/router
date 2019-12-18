'use strict';

import {Component} from 'react';
// import * as PropTypes from 'prop-types';
// import RouteMatcher from './RouteMatcher';
// import Page from './Page';

class Route extends Component {
    constructor(props) {
        super(props);
        this._node = null;
    }

    getNode() {
        var node = this._node;

        while (node && node instanceof Route) {
            node = node.getNode();
        }

        return node;
    }

    render() {
        return this.getComponentsToRender(this);
    }

    /**
     * 
     * @param {React.Component} component 
     */
    getComponentsToRender(component) {
        var url = component.props.url;
        var base = component.props.base || '';

        var ViewComponent = component.props.component;
        var child;

        // console.log('URL', url);
        var routeComponent = component.props.matcher.match(url, this._getChildren(component), base);
        if (routeComponent) {
            child = this.getComponentsToRender(routeComponent);
        }

        return (
            <ViewComponent {...component.props.componentProps} ref={(node) => {
                this._node = node;
            }}>
                {child}
            </ViewComponent>
        );
    }

    /**
     * 
     * @param {React.Component} component 
     */
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

// Route.propTypes = {
//     path: PropTypes.string.isRequired,
//     component: PropTypes.node.isRequired,
//     index: PropTypes.bool
// };

export default Route;
export {
    Route
}
