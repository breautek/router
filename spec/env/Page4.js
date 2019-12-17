'use strict';

import {Page} from '../../src/Page';

export class Page4 extends Page {
    getClassName() {
        return 'Page4';
    }

    getTitle() {
        return Promise.resolve(this.getClassName());
    }

    $render() {
        return <span>Page4</span>;
    }
}
