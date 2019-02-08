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
		window.location.hash = '/page1';
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

	it('can navigate pages', (done) => {
		var comp = router();

		var r = getRouter();
		expect(r.getHistoryLength()).toBe(0);
		expect(r.canBack()).toBe(false);

		var __urlChange = (url) => {
			comp.state('strategy').removeURLChangeCallback(__urlChange);
			expect(url).toBe('/page2');
			expect(r.canBack()).toBe(true);
			expect(r.getHistoryLength()).toBe(2);
			expect(comp.html()).toBe('<div><div class="bt_router_Page"><span>Page2</span></div></div>');

			comp.unmount();
			done();
		};
		
		comp.state('strategy').addURLChangeCallback(__urlChange);

		r.pushState('/page2');
	});
});
