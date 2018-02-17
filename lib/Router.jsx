'use strict';

import {Component, ReactNode, ReactElement} from 'react';
import RouterStrategy from './RouterStrategy';
import DefaultStrategy from './DefaultStrategy';
import URLPattern from 'url-pattern';
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

		this.state = {
			strategy: new Strategy(this),
			url: window.location.href
		};

		this._onURLChange = this._onURLChange.bind(this);
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
		var url = this.state.url;
		console.log(url);
		// var pattern = new URLPattern(u)

		var ComponentToRender = null;

		var children = this._getChildren();
		for (var i = 0; i < children.length; i++) {
			var route = children[i];
			var pattern = new URLPattern(route.props.path);
			var match = pattern.match(url);
			if (match) {
				ComponentToRender = route;
				break;
			}
		}

		return ComponentToRender;
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
