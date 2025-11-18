
import * as React from 'react';
import {IViewState, View} from '../../src/View';

export class View3 extends View {
    protected override _initState(): IViewState {
        return {};
    }

    public getClassName(): string {
        return 'View3';
    }

    public async getTitle(): Promise<string> {
        return Promise.resolve(this.getClassName());
    }

    protected _renderView(): React.ReactNode {
        return <React.Fragment>View3</React.Fragment>;
    }
}
