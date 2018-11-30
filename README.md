# @breautek/router

A router for React 16.

This library was built for my own professional work so at this time, I don't plan on providing support outside of my own needs. It is published to NPM so that I can take advantage of semvar.

With that being said, if you're looking for a more simple routing library feel free to use it at your own risk.

## Simple Example

### HTML
`
<!DOCTYPE html>
<html>
	<head>
		<title>Example</title>
	</head>
	<body>
		<div id="app"></div>
	</body>
</html>
`

### JavaScript
`
import {
	Router, 
	Route,
	HashStrategy,
	Page
} from '@breautek/router';

class MyApp extends React.Component {
	render() {
		return (
			<div className="MyApp">
				{this.props.children}
			</div>
		);
	}
}

class Page1 extends Page {
	$render() {
		return (
			<div onClick={(() => {
				this.props.router.pushState('/page2');
			}>Page1</div>
		);	
	}
}

class Page2 extends Page {
	$render() {
		return (
			<div onClick={(() => {
				this.props.router.pushState('/page1');
			}>Page2</div>
		);	
	}
}

render(
	<Router strategy={HashStrategy} component={MyApp}>
		<Route key="page1" path="/page1" component={Page1} index />
		<Route key="page2" path="/page2" component={Page2} />
	</Router>,
	document.getElementById(app);
);
`

