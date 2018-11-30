'use strict';

import {Page} from '../../src/Page';

export class Page4 extends Page {
	getClassName() {
		return 'Page4';
	}

	$render() {
		return <span>Page4</span>;
	}
}
