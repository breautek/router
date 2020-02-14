

import * as React from 'react';

export class TestApp extends React.Component {
    render() {
        return <div className="app">{this.props.children}</div>
    }
}
