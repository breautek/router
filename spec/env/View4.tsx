
import * as React from 'react';
import {View} from '../../src/View';

export class View4 extends View {
    public getClassName() {
        return 'View4';
    }

    public getTitle() {
        return Promise.resolve(this.getClassName());
    }

    protected _renderView() {
        return <React.Fragment>View4</React.Fragment>;
    }
}
