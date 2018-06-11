import {Component} from 'react';

import {Page} from '@breautek/router';

export class Page1 extends Page {
    constructor(props) {
        super(props);
        window.r = props.router;
    }

    _render() {
        return (
            <div style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'red'
            }}>
                Component 1
            </div>
        );
    }
}
