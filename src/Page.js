'use strict';

import {Component} from 'react';
import "./Page.scss";

export class Page extends Component {
	constructor(props) {
		super(props);
		this._node = null;
	}

	$render() {
		throw new Error('Page.$render is abstract');
	}

	getNode() {
		return this._node;
	}

	render() {
		return <div className="bt_router_Page" ref={(n) => { this._node = n; }}>{this._render()}</div>;
	}
}

export default Page;
