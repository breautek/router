
import * as React from 'react';
import {View, IViewProps} from '../../src/View';

export let _instance: VarView;

export interface IVarViewProps extends IViewProps {
    [key: string]: any;
}

export class VarView extends View<IVarViewProps> {
    constructor(props: IVarViewProps) {
        super(props);
        _instance = this;
    }

    public getClassName() {
        return 'VarView';
    }

    public getCSSClass() {
        return 'VarView';
    }

    public getTitle() {
        return Promise.resolve(this.getClassName());
    }

    public getProps() {
        return this.props;
    }

    protected _renderView() {
        return <React.Fragment>VarView</React.Fragment>;
    }
}
