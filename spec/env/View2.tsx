
import * as React from 'react';
import {View} from '../../src/View';

export class View2 extends View {
    public getClassName() {
        return 'View2';
    }

    public getTitle() {
        return Promise.resolve(this.getClassName());
    }

    protected _renderView() {
        return <React.Fragment>View2</React.Fragment>;
    }
}
