
import {Component, ReactNode} from 'react';
import IRouterStrategy from './IRouterStrategy';
import RouterStrategy from './RouterStrategy';
import DefaultStrategy from './DefaultStrategy';
import * as URLPattern from 'url-pattern';

interface RouterProps {
	strategy?: IRouterStrategy;
}

interface RouterState {
	strategy: RouterStrategy;
	url: string;
}

class Router extends Component<RouterProps, RouterState> {
	public constructor(props: RouterProps) {
		super(props);

		var Strategy: IRouterStrategy;
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
	
	private _onURLChange(url: string): void {
		this.setState({
			url: url
		});
	}

	public componentWillMount(): void {
		this.state.strategy.addURLChangeCallback(this._onURLChange);
	}

	public componentWillUnmount(): void {
		this.state.strategy.removeURLChangeCallback(this._onURLChange);
	};

	public componentWillReceiveProps(nextProps: RouterProps): void {
		if (nextProps.strategy && (this.state.strategy instanceof nextProps.strategy)) {
			this.state.strategy.removeURLChangeCallback(this._onURLChange);
			var strat: RouterStrategy = new nextProps.strategy(this);
			strat.addURLChangeCallback(this._onURLChange);
			this.setState({
				strategy: strat
			});
		}
	}

	public render(): ReactNode {
		var url: string = this.state.url;
		console.log(url);
		return <div></div>;
	}

	public getHistoryLength(): number {
		return this.state.strategy.getHistoryLength();
	}

	public getScrollRestoration(): string {
		return this.state.strategy.getScrollRestoration();
	}

	public go(to: number): void {
		this.state.strategy.go(to);
	}

	public back(): void {
		this.state.strategy.go(-1);
	}

	public forward(): void {
		this.state.strategy.go(1);
	}


}

export {
	Router,
	RouterProps
};
export default Router;
