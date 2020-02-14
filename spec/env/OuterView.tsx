
import * as React from 'react';
import {View} from '../../src/View';

export class OuterView extends View {
    public getClassName() {
        return 'OuterView';
    }

    public getTitle() {
        return Promise.resolve(this.getClassName());
    }

    protected _renderView() {
        return (
            <React.Fragment>
                <div>Outer View</div>
                {this.props.children}
            </React.Fragment>
        );
    }
}
