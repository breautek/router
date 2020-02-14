
import * as React from 'react';
import {View} from '../../src/View';

export class View1 extends View {
    public getClassName() {
        return 'View1';
    }

    public getCSSClass() {
        return 'View1';
    }

    public getTitle() {
        return Promise.resolve(this.getClassName());
    }

    protected _renderView() {
        return <React.Fragment>View1</React.Fragment>;
    }
}
