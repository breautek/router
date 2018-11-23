'use strict';

import React from 'react';
import { mount} from 'enzyme';
import sinon from 'sinon';
import jasmineEnzyme from 'jasmine-enzyme';

import {
	TestApp,
	Page1,
	Page2,
	Page3,
	Page4,
} from './env';

import {Router, getRouter} from '../src/Router';
import {Route} from '../src/Route';

require('jasmine-sinon');

describe('@breautek/router', () => {
	let app;

	const router = () => {
		if (!app) {
			app = mount(
				<Router component={TestApp}>
					<Route key="page1" path="/page1" component={Page1} index />
					<Route key="page2" path="/page2" component={Page2} />
					<Route key="page3" path="/page3" component={Page3} />
					<Route key="page4" path="/page4" component={Page4} />
				</Router>
			);
		}

		return app;
	}

	beforeEach(() => {
		jasmineEnzyme();
		app = undefined;
	});

	it('It renders index page', () => {
		var comp = router();

		expect(comp.html()).toBe('<div><div class="bt_router_Page"><span>Page1</span></div></div>');

		comp.unmount();
	});

	it('getRouter()', () => {
		expect(getRouter()).toBe(null);

		var comp = router();

		expect(comp.instance().state.strategy).toBe(getRouter());

		comp.unmount();
	});

	// it('push', (done) => {
	// 	var comp = router();

	// 	var r = getRouter();
	// 	expect(r.getLocation()).toBe('');
	// 	expect(r.getHistoryLength()).toBe(0);
	// 	expect(r.canBack()).toBe(false);
	// 	expect(comp.html()).toBe('<div><div class="bt_router_Page"><span>Page1</span></div></div>');

	// 	var onURLChangeSpy = sinon.spy(comp.instance(), '_onURLChange');
	// 	console.log(onURLChangeSpy, typeof onURLChangeSpy);

	// 	getRouter().addURLChangeCallback(() => {

	// 		expect(onURLChangeSpy.calledOnce()).toBe(true);
	// 		// expect(comp.html()).toBe('<div><div class="bt_router_Page"><span>Page1</span></div></div>');

	// 		done();
	// 	});

	// 	r.pushState('/page1');
	// 	expect(r.getLocation()).toBe('/page1');
	// 	expect(r.getHistoryLength()).toBe(2);
	// 	expect(r.canBack()).toBe(true);
	// 	// setTimeout(() => {
	// 	// 	console.log(comp.html());
	// 	// 	done();
	// 	// }, 10);

	// 	// r.pushState('/page2');
	// 	// expect(r.getLocation()).toBe('/page2');
	// 	// expect(r.getHistoryLength()).toBe(3);
	// 	// expect(r.canBack()).toBe(true);
	// 	// expect(comp.html()).toBe('<div><div class="bt_router_Page"><span>Page2</span></div></div>');

	// 	// comp.unmount();
	// })
});
