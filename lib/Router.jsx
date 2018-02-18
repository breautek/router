'use strict';

import {Component, ReactNode, ReactElement, cloneElement} from 'react';
import RouterStrategy from './RouterStrategy';
import DefaultStrategy from './DefaultStrategy';
import RouteMatcher from './RouteMatcher';
import * as Path from 'path';

class Router extends Component {
	constructor(props) {
		super(props);

		var Strategy;
		if (!props.strategy) {
			Strategy = DefaultStrategy;
		}
		else {
			Strategy = props.strategy;
		}

		var strategy = new Strategy(this);

		this.state = {
			strategy: strategy,
			url : strategy.getLocation()
		};

		this._onURLChange = this._onURLChange.bind(this);
		this.matcher = new RouteMatcher(strategy);
	}
	
	_onURLChange(url) {
		this.setState({
			url: url
		});
	}

	componentWillMount() {
		this.state.strategy.addURLChangeCallback(this._onURLChange);
	}

	componentWillUnmount() {
		this.state.strategy.removeURLChangeCallback(this._onURLChange);
	};

	componentWillReceiveProps(nextProps) {
		if (nextProps.strategy && (this.state.strategy instanceof nextProps.strategy)) {
			this.state.strategy.removeURLChangeCallback(this._onURLChange);
			var strat = new nextProps.strategy(this);
			strat.addURLChangeCallback(this._onURLChange);
			this.setState({
				strategy: strat
			});
		}
	}

	render() {
		return this.routeMatcher.match(this.state.url || '/', this._getChildren(), '', this._getIndexRoute());
	}

	getHistoryLength() {
		return this.state.strategy.getHistoryLength();
	}

	getScrollRestoration() {
		return this.state.strategy.getScrollRestoration();
	}

	go(to) {
		this.state.strategy.go(to);
	}

	back() {
		this.state.strategy.go(-1);
	}

	forward() {
		this.state.strategy.go(1);
	}

	_getChildren() {
		var children = null;

		if (this.props.children instanceof Array) {
			children = this.props.children;
		}
		else {
			children = [this.props.children];
		}

		return children;
	}

	_getIndexRoute() {
		var children = this._getChildren();
		for (var i = 0; i < children.length; i++) {
			var child = children[i];
			if (child.props.index) {
				return child;
			}
		}

		return null;
	}
}

export {
	Router
};
export default Router;
