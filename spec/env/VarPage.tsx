
import * as React from 'react';
import {Page, IPageProps} from '../../src/Page';

export let _instance: VarPage;

export interface IVarPageProps extends IPageProps {
    [key: string]: any;
}

export class VarPage extends Page<IVarPageProps> {
    constructor(props: IVarPageProps) {
        super(props);
        _instance = this;
    }

    getClassName() {
        return 'VarPage';
    }

    getTitle() {
        return Promise.resolve(this.getClassName());
    }

    getProps() {
        return this.props;
    }

    $render() {
        return <span className="var-page">VarPage</span>;
    }
}
