
import * as React from 'react';
import {View} from '../../src/View';

export class View3 extends View {
    public getClassName() {
        return 'View3';
    }

    public getTitle() {
        return Promise.resolve(this.getClassName());
    }

    protected _renderView() {
        return <React.Fragment>View3</React.Fragment>;
    }
}
