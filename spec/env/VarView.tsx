
import * as React from 'react';
import {View, IViewProps} from '../../src/View';

// eslint-disable-next-line no-use-before-define
export let instance: VarView;

export interface IVarViewProps extends IViewProps {
    [key: string]: any;
}

export class VarView extends View<IVarViewProps> {
    constructor(props: IVarViewProps) {
        super(props);
        instance = this;
    }

    public getClassName(): string {
        return 'VarView';
    }

    public getCSSClass(): string {
        return 'VarView';
    }

    public async getTitle(): Promise<string> {
        return Promise.resolve(this.getClassName());
    }

    public getProps(): any {
        return this.props;
    }

    protected _renderView(): React.ReactNode {
        return <React.Fragment>VarView</React.Fragment>;
    }
}
