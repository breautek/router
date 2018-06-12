'use strict';

import {Component} from 'react';

export class Root extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'red'
            }} className="ROOT">
                {this.props.children}
            </div>
        );
    }
}
