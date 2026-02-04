
import * as React from 'react';
import {IViewState, IViewProps, View} from '../../src/View';

interface IOuterViewProps extends IViewProps {
    children?: React.ReactNode;
}

export class OuterView extends View<IOuterViewProps> {
    protected override _initState(): IViewState {
        return {};
    }
    
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
