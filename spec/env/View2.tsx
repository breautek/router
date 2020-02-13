
import * as React from 'react';
import {View} from '../../src/View';

export class View2 extends View {
    getClassName() {
        return 'View2';
    }

    getTitle() {
        return Promise.resolve(this.getClassName());
    }

    $render() {
        return <span>View2</span>;
    }
}
