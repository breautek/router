
import * as React from 'react';
import {Page} from '../../src/Page';

export class Page3 extends Page {
    getClassName() {
        return 'Page3';
    }

    getTitle() {
        return Promise.resolve(this.getClassName());
    }

    $render() {
        return <span>Page3</span>;
    }
}
