
import * as React from 'react';
import {View} from '../../src/View';

export class View4 extends View {
    getClassName() {
        return 'View4';
    }

    getTitle() {
        return Promise.resolve(this.getClassName());
    }

    $render() {
        return <span>View4</span>;
    }
}
