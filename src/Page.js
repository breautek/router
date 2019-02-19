'use strict';

import {Component} from 'react';
import "./Page.scss";

export class Page extends Component {
	constructor(props) {
		super(props);
		this._node = null;
	}

	componentWillMount() {
		var title = this.getTitle().then((title) => {
			if (title && title.toString()) {
				this.props.router.setTitle(title.toString());
			}
		});
	}

	$render() {
		throw new Error('Page.$render is abstract');
	}

	getNode() {
		return this._node;
	}

	getTitle() {
		return Promise.resolve("adsfa");
	}

	render() {
		return <div className="bt_router_Page" ref={(n) => { this._node = n; }}>{this.$render()}</div>;
	}
}

export default Page;
