'use strict';

console.log(process.env);

import HashStrategy from '../src/HashStrategy.js';
import Router from '../src/Router.js';

jest.mock('../src/HashStrategy.js');
jest.mock('../src/Router.js');

it('test', () => {
	expect(Router).not.toHaveBeenCalled();
	expect(HashStrategy).not.toHaveBeenCalled();

	var strategy = new HashStrategy(new Router());
	
	expect(HashStrategy).toHaveBeenCalledTimes(1);
});
