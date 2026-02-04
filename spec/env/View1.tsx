
import * as React from 'react';
import {IViewState, View} from '../../src/View';

export class View1 extends View {
    protected override _initState(): IViewState {
        return {};
    }

    public getClassName(): string {
        return 'View1';
    }

    public getCSSClass(): string {
        return 'View1';
    }

    public async getTitle(): Promise<string> {
        return Promise.resolve(this.getClassName());
    }

    protected _renderView(): React.ReactNode {
        return <React.Fragment>View1</React.Fragment>;
    }
}
