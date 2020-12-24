
import * as React from 'react';
import {View} from '../../src/View';

export class InnerView extends View {
    public getClassName(): string {
        return 'InnerView';
    }

    public async getTitle(): Promise<string> {
        return Promise.resolve(this.getClassName());
    }

    protected _renderView(): React.ReactNode {
        return (
            <React.Fragment>Inner View</React.Fragment>
        );
    }
}
