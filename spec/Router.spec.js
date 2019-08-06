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

var tick = function(fn) {
	setTimeout(fn, 1);
};

var getTitle = function() {
	return document.head.getElementsByTagName('title')[0].innerHTML;
}

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
		// document.head.removeChild(document.head.getElementsByTagName('title')[0]);
		window.location.hash = '/page1';
		app = undefined;
	});

	it('It renders index page', (done) => {
		var comp = router();
		expect(comp.html()).toBe('<div><div class="bt_router_Page"><span>Page1</span></div></div>');
		tick(() => {
			expect(getTitle()).toBe('Page1');
			comp.unmount();
			done();
		});
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

			if (firstFire) {
				expect(getTitle()).toBe('Page1');
				firstFire = false;
				return;
			}

			comp.state('strategy').removeURLChangeCallback(__urlChange);

			tick(() => {
				expect(getTitle()).toBe('Page2');
				expect(url).toBe('/page2');
				expect(r.canBack()).toBe(true);
				expect(r.getHistoryLength()).toBe(2);
				expect(comp.html()).toBe('<div><div class="bt_router_Page"><span>Page2</span></div></div>');

				comp.unmount();
				done();
			});
		};

		var firstFire = true;
		
		comp.state('strategy').addURLChangeCallback(__urlChange);

		tick(() => {
			r.pushState('/page2');	
		});
	});
});
