import {Component} from 'react';

import {Page} from '@breautek/router';

export class Page3 extends Page {
    constructor(props) {
        super(props);
    }

    _render() {
        return <div>Component 3: ({this.props.id}) {this.props.url || JSON.stringify(this.props)}</div>;
    }
}
