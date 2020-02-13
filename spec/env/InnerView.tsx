
import * as React from 'react';
import {View} from '../../src/View';

export class InnerView extends View {
    getClassName() {
        return 'InnerView';
    }

    getTitle() {
        return Promise.resolve(this.getClassName());
    }

    $render() {
        return (
            <div>Inner View</div>
        );
    }
}
