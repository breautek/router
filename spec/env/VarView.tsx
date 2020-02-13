
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

    getClassName() {
        return 'VarView';
    }

    getTitle() {
        return Promise.resolve(this.getClassName());
    }

    getProps() {
        return this.props;
    }

    $render() {
        return <span className="var-View">VarView</span>;
    }
}
