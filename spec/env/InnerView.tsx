
import * as React from 'react';
import {Page} from '../../src/Page';

export class InnerView extends Page {
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
