
import * as React from 'react';
import {View, IViewState} from '../../src/View';

export class InnerView extends View {
    protected override _initState(): IViewState {
        return {};
    }

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
