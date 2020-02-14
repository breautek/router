
import * as React from 'react';
import {View} from '../../src/View';

export class InnerView extends View {
    public getClassName() {
        return 'InnerView';
    }

    public getTitle() {
        return Promise.resolve(this.getClassName());
    }

    protected _renderView() {
        return (
            <React.Fragment>Inner View</React.Fragment>
        );
    }
}
