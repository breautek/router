'use strict';

import {Page} from '../../src/Page';

export class Page1 extends Page {
	getClassName() {
		return 'Page1';
	}

	$render() {
		return <span>Page1</span>;
	}
}
