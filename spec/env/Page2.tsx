
import * as React from 'react';
import {Page} from '../../src/Page';

export class Page2 extends Page {
    getClassName() {
        return 'Page2';
    }

    getTitle() {
        return Promise.resolve(this.getClassName());
    }

    $render() {
        return <span>Page2</span>;
    }
}
