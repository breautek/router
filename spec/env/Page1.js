'use strict';

import {Page} from '../../src/Page';

export class Page1 extends Page {
	getClassName() {
		return 'Page1';
	}

	getTitle() {
		return Promise.resolve(this.getClassName());
	}

	$render() {
		return <span>Page1</span>;
	}
}
