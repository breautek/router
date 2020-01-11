
import * as React from 'react';

import {DefaultStrategy} from './DefaultStrategy';
import {RouteMatcher} from './RouteMatcher';
import { RouterStrategy } from './RouterStrategy';
import { IRouterStrategyClass } from './IRouterStrategyClass';
import {Page} from './Page';

let instance: Router = null;

export let getRouter = (): RouterStrategy => {
    if (!instance) {
        return null;
    }

    return instance.getRouterStrategy();
}

export interface IRouterProps {
    strategy: IRouterStrategyClass;
    component: React.Component;
}

export interface IRouterState {
    strategy: RouterStrategy;
    url: string;
    shouldTransition: boolean;
}

export class Router<TRouterProps extends IRouterProps = IRouterProps> extends React.Component<TRouterProps, IRouterState> {
    public state: IRouterState;
    
    private _lastRenderedRoute: any;
    private _matcher: RouteMatcher;
    private _awaitingTransition: boolean;
    private _incomingNode: Page;
    private _exitingNode: Page;

    public constructor(props: TRouterProps) {
        super(props);

        let Strategy: IRouterStrategyClass;
        if (!props.strategy) {
            Strategy = DefaultStrategy;
        }
        else {
            Strategy = props.strategy;
        }

        let strategy: RouterStrategy = new Strategy(this);

        this.state = {
            strategy: strategy,
            url: strategy.getLocation(),
            shouldTransition: false
        };

        this._lastRenderedRoute = null;
        this._onURLChange = this._onURLChange.bind(this);
        this._matcher = new RouteMatcher(strategy);
    }

    public getRouterStrategy(): RouterStrategy {
        return this.state.strategy;
    }

    private _onURLChange(url: string): void {
        if (url !== this.state.url) {
            this.setState({
                url: url,
                shouldTransition : true
            });
        }
    }

    public UNSAFE_componentWillMount(): void {
        instance = this;
        this.state.strategy.addURLChangeCallback(this._onURLChange);
    }

    public UNSAFE_componentWillReceiveProps(nextProps: TRouterProps) {
        if (nextProps.strategy && (this.state.strategy instanceof nextProps.strategy)) {
            this.state.strategy.removeURLChangeCallback(this._onURLChange);
            var strat = new nextProps.strategy(this);
            strat.addURLChangeCallback(this._onURLChange);
            this.setState({
                strategy: strat
            });
        }
    }

    public componentWillUnmount() {
        instance = null;
        this.state.strategy.removeURLChangeCallback(this._onURLChange);
    }

    public render(): React.ReactNode {
        let currentRoute: React.ReactElement = this._matcher.match(this.state.url || '/', this._getChildren(), '', this._getIndexRoute());
        let Root: React.ReactType = null;
        if (this.props.component) {
            Root = this.props.component as unknown as React.ReactType;
        }

        if (
            this.state.shouldTransition && (
                currentRoute.props.entryTransition || (
                    this._lastRenderedRoute && 
                    this._lastRenderedRoute.props.exitTransition
                )
            )
        ) {
            this._awaitingTransition = true;
            var exiting = null;
            if (this._lastRenderedRoute) {
                exiting = React.cloneElement(this._lastRenderedRoute, {
                    ref : (node: Page) => {
                        this._exitingNode = node;
                    }
                });
            }

            // Incoming will always be safe to render, hence no defensive checks
            var incoming = React.cloneElement(currentRoute, {
                ref : (node: Page) => {
                    this._incomingNode = node;
                }
            });

            if (Root) {
                return <Root router={this.getRouterStrategy()} url={this.state.url}>{[exiting, incoming]}</Root>;
            }
            else {
                return [exiting, incoming];
            }
        }
        else {
            this._lastRenderedRoute = currentRoute;

            if (Root) {
                // currentRoute must be rendered as an array; because, exiting and incoming is rendered as an array.
                // if currentRoute is not rendered as an array, a bug happens where the exiting screen is reloaded 
                // calling the constructor again.
                return <Root router={this.getRouterStrategy()} url={this.state.url}>{[currentRoute]}</Root>;
            }
            else {
                return currentRoute;
            }
        }
    }

    public componentDidUpdate(): void {
        if (this._awaitingTransition) {
            this._awaitingTransition = false;
            let exitTransitionPromise: Promise<void> = null;
            let entryTransitionPromise: Promise<void> = null;
            if (this._exitingNode && this._exitingNode.props.exitTransition) {
                exitTransitionPromise = this._exitingNode.props.exitTransition.execute(this._incomingNode, this._exitingNode);
            }
            else {
                exitTransitionPromise = Promise.resolve();
            }

            if (this._incomingNode.props.entryTransition) {
                entryTransitionPromise = this._incomingNode.props.entryTransition.execute(this._incomingNode, this._exitingNode);
            }
            else {
                entryTransitionPromise = Promise.resolve();
            }

            exitTransitionPromise.then(() => {
                return entryTransitionPromise;
            }).catch((error: Error) => {
                console.error(error);
            }).then(() => {
                this._incomingNode = null;
                this._exitingNode = null;
                this.setState({shouldTransition: false});
            });
        }
    }

    public getHistoryLength(): number {
        return this.state.strategy.getHistoryLength();
    }

    public getScrollRestoration(): ScrollRestoration {
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

    private _getChildren(): Array<React.ReactElement> {
        let children: Array<React.ReactElement> = null;

        if (this.props.children instanceof Array) {
            children = this.props.children as React.ReactElement[];
        }
        else {
            children = [this.props.children as React.ReactElement];
        }

        return children;
    }

    private _getIndexRoute(): React.ReactElement {
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
