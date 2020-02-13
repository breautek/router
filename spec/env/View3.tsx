
import * as React from 'react';
import {View} from '../../src/View';

export class View3 extends View {
    getClassName() {
        return 'View3';
    }

    getTitle() {
        return Promise.resolve(this.getClassName());
    }

    $render() {
        return <span>View3</span>;
    }
}
