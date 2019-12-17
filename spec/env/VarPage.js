'use strict';

import {Page} from '../../src/Page';

export let _instance;

export class VarPage extends Page {
    constructor(props) {
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
