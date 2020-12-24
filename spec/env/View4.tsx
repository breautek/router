
import * as React from 'react';
import {View} from '../../src/View';

export class View4 extends View {
    public getClassName(): string {
        return 'View4';
    }

    public async getTitle(): Promise<string> {
        return Promise.resolve(this.getClassName());
    }

    protected _renderView(): React.ReactNode {
        return <React.Fragment>View4</React.Fragment>;
    }
}
