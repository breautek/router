import {Component} from 'react';

import {Page} from '@breautek/router';

export class Page4 extends Page {
    constructor(props) {
        super(props);
    }

    _render() {
        return (
            <div style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'blue'
            }} onClick={() => {
                this.props.router.replaceState('/test1');
            }}>
                Component 4
            </div>
        );
    }
}
