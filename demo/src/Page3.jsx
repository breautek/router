import {Component} from 'react';

import {Page} from '@breautek/router';

export class Page3 extends Page {
    constructor(props) {
        super(props);
    }

    _render() {
        return (
            <div style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'pink'
            }} onClick={() => {
                this.props.router.replaceState('/test4');
            }}>
                Component 3
            </div>
        );
    }
}
