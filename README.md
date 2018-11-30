# @breautek/router

A router for React 16.

This library was built for my own professional work so at this time, I don't plan on providing support outside of my own needs. It is published to NPM so that I can take advantage of semvar.

With that being said, if you're looking for a more simple routing library feel free to use it at your own risk.

## Simple Example

### HTML
```html
<!DOCTYPE html>
<html>
	<head>
		<title>Example</title>
	</head>
	<body>
		<div id="app"></div>
	</body>
</html>
```

### JavaScript

```javascript
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
```

Couple notes:
`<Route>` components only needs the key attribute if you use page transitions. (Undocumented at this time because they are experimental)
In `<Router>`, if the strategy prop is omitted, HashStrategy will be used by default.
The RouterStrategy will be exposed to screens via the `router` prop.

## RouterStrategy API
| Methods                            | Return Type 	| Description
| ---------------------------------- | ---------------- | ----------------------------- |
| getLocation 			     | string 		| Gets the current URL 		|
| getHistoryLength()		     | number 		| Gets the number of items in the history stack
| go(to) 			     | void 		| Navigates the history. First parameter a number that defines how many steps to jump. 1 will mean go forward one entry, or -1 to go back one entry.
| canGo(to) 			     | boolean 		| Returns true if there is a location entry at that point in the history stack
| canBack() 			     | boolean 		| Returns true if there is a previous entry. Same as calling canGo(-1)
| canForward() 			     | boolean 		| Returns true if there is a next entry. Same as calling canGo(1)
| pushState(url, state) 	     | void 		| Pushes a new entry to the history stack. `url` is a string of where to go. `state` is an object that currently is not in use but reserved for future updates. If the router position is not at the end of the stack. Calling this API will clear future entries
| replaceState(url, state)	     | void 		| Similar to pushState, however it replaces the current entry with `url`. Again `state` is an object not in use, but reserved for future updates
| clear() 			     | void 		| Clears the history stack

Known issue: There can be wonky behaviour when users use the back button depending on how the library is used. The library manages its own history stack, but will listen for history changes.

Both `HashStrategy` and `URLStrategy` extends `RouterStrategy` and share the same interface. If you don't know which strategy to use, best to stick with `HashStrategy` which is the default.

### HashStrategy

This is a strategy where it uses # URLs. By default #/ is a prefix to all urls. So `pushState(/myPage)` will generate a url that looks something like `example.com/#/myPage`

This strategy is used by default because it works out of the box with no additional configuration.

### URLStrategy

If you want clean URLs, then the URLStrategy is available. By default URLStrategy will prefix '/r' to any urls. So `pushState(/myPage)` will generate a url that looks something like `example.com/r/myPage`

Using URLStrategy requires additional configuration on the server side. You will need to redirect all URLs that starts with the URLStrategy prefix `/r` to load your index.html page that launches the react app. How this is done depends on your web server configuration. This is necessary because otherwise users will not be able to bookmark or reload the page.

Note, currently the URLStrategy prefix cannot be changed. There are plans on making RouterStrategy more configurable but for  the time being, you can just simply extend `URLStrategy`

```Javascript
class MyCustomStrategy extends URLStrategy {
	constructor(router) {
		super(router);
		this._base = window.location.origin + '/myPrefix';
	}
	
	getLocation() {
		return window.location.pathname.replace('/myPrefix', '');
	}
}
```
