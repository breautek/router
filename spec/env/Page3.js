'use strict';

import {Page} from '../../src/Page';

export class Page3 extends Page {
	getClassName() {
		return 'Page3';
	}

	$render() {
		return <span>Page3</span>;
	}
}
