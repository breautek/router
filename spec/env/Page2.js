'use strict';

import {Page} from '../../src/Page';

export class Page2 extends Page {
	getClassName() {
		return 'Page2';
	}

	$render() {
		return <span>Page2</span>;
	}
}
