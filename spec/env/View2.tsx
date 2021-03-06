
import * as React from 'react';
import {View} from '../../src/View';

export class View2 extends View {
    public getClassName(): string {
        return 'View2';
    }

    public async getTitle(): Promise<string> {
        return Promise.resolve(this.getClassName());
    }

    protected _renderView(): React.ReactNode {
        return <React.Fragment>View2</React.Fragment>;
    }
}
