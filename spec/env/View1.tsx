
import * as React from 'react';
import {View} from '../../src/View';

export class View1 extends View {
    getClassName() {
        return 'View1';
    }

    getTitle() {
        return Promise.resolve(this.getClassName());
    }

    $render() {
        return <span>View1</span>;
    }
}
