'use strict';

import React from 'react';

export class TestApp extends React.Component {
    render() {
        return <div>{this.props.children}</div>
    }
}
