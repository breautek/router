'use strict';

import {Component} from 'react';
import "./Page.scss";

export class Page extends Component {
	constructor(props) {
		super(props);
		this._node = null;
	}

	componentDidMount() {
		this.getTitle().then((title) => {	
			this.props.router.setTitle(title);
		});
	}

	$render() {
		throw new Error('Page.$render is abstract');
	}

	getNode() {
		return this._node;
	}

	getTitle() {
		return Promise.resolve(null);
	}

	getPageStyles() {
		return {};
	}

	render() {
		return <div className="bt_router_Page" ref={(n) => { this._node = n; }} style={this.getPageStyles()}>{this.$render()}</div>;
	}
}

export default Page;
