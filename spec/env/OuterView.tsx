
import * as React from 'react';
import {View} from '../../src/View';

export class OuterView extends View {
    public getClassName(): string {
        return 'OuterView';
    }

    public async getTitle(): Promise<string> {
        return Promise.resolve(this.getClassName());
    }

    protected _renderView(): React.ReactNode {
        return (
            <React.Fragment>
                <div>Outer View</div>
                {this.props.children}
            </React.Fragment>
        );
    }
}
