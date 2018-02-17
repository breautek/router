'use strict';

import {Component, ReactNode} from 'react';

class Route extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('route', this.props);
        var RouteComponent = this.props.component;
        return <RouteComponent />;
    }
}

export default Route;
export {
    Route,
    RouteProps,
    RouteState
}
