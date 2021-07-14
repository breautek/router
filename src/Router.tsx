
import "core-js/stable";
import "regenerator-runtime/runtime";

import * as React from 'react';

import {DefaultStrategy} from './DefaultStrategy';
import {RouteMatcher} from './RouteMatcher';
import { RouterStrategy } from './RouterStrategy';
import { IRouterStrategyClass } from './IRouterStrategyClass';
import {IOnNoRoute} from './IOnNoRoute';
import { Route } from "./Route";

export interface IRouterProps {
    strategy?: IRouterStrategyClass;
    component: React.ComponentClass<any>;
    onNoRoute?: IOnNoRoute;
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
    private _incomingRoute: Route;
    private _exitingRoute: Route;

    private static _instance: Router;

    public constructor(props: TRouterProps) {
        super(props);

        // eslint-disable-next-line @typescript-eslint/naming-convention
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

    public static getInstance(): RouterStrategy {
        if (!Router._instance) {
            return null;
        }
    
        return Router._instance.getRouterStrategy();
    }

    /**
     * Gets the current routing strategy
     */
    public getRouterStrategy(): RouterStrategy {
        return this.state.strategy;
    }

    /**
     * @ignore
     */
    private _onURLChange(url: string): void {
        if (url !== this.state.url) {
            this.setState({
                url: url,
                shouldTransition : true
            });
        }
    }

    public componentDidMount(): void {
        Router._instance = this;
        this.state.strategy.addURLChangeCallback(this._onURLChange);
    }

    /**
     * @ignore
     */
    public UNSAFE_componentWillReceiveProps(nextProps: TRouterProps): void {
        if (nextProps.strategy && (this.state.strategy instanceof nextProps.strategy)) {
            this.state.strategy.removeURLChangeCallback(this._onURLChange);
            let strat: RouterStrategy = new nextProps.strategy(this);
            strat.addURLChangeCallback(this._onURLChange);
            this.setState({
                strategy: strat
            });
        }
    }

    /**
     * @ignore
     */
    public componentWillUnmount(): void {
        Router._instance = null;
        this.state.strategy.removeURLChangeCallback(this._onURLChange);
    }

    /**
     * @ignore
     */
    public render(): React.ReactNode {
        let currentRoute: React.ReactElement = this._matcher.match(this.state.url || '/', this._getChildren(), '', this._getIndexRoute(), this.props.onNoRoute);
        // eslint-disable-next-line @typescript-eslint/naming-convention
        let Root: React.ElementType = null;
        if (this.props.component) {
            Root = this.props.component as unknown as React.ElementType;
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
            let exiting: React.ReactElement = null;
            if (this._lastRenderedRoute) {
                exiting = React.cloneElement(this._lastRenderedRoute, {
                    ref : (route: Route) => {
                        this._exitingRoute = route;
                    }
                });
            }

            // Incoming will always be safe to render, hence no defensive checks
            let incoming: React.ReactElement = React.cloneElement(currentRoute, {
                ref : (route: Route) => {
                    this._incomingRoute = route;
                }
            });

            if (Root) {
                return <Root router={this.getRouterStrategy()} url={this.state.url}>{[ exiting, incoming ]}</Root>;
            }
            else {
                return [ exiting, incoming ];
            }
        }
        else {
            this._lastRenderedRoute = currentRoute;

            if (Root) {
                // currentRoute must be rendered as an array; because, exiting and incoming is rendered as an array.
                // if currentRoute is not rendered as an array, a bug happens where the exiting screen is reloaded 
                // calling the constructor again.
                return <Root router={this.getRouterStrategy()} url={this.state.url}>{[ currentRoute ]}</Root>;
            }
            else {
                return currentRoute;
            }
        }
    }

    /**
     * @ignore
     */
    public componentDidUpdate(): void {
        if (this._awaitingTransition) {
            this._awaitingTransition = false;
            let exitTransitionPromise: Promise<void> = null;
            if (this._exitingRoute && this._exitingRoute.props.exitTransition) {
                exitTransitionPromise = this._exitingRoute.props.exitTransition.execute(this._incomingRoute.getView(), this._exitingRoute.getView());
            }
            else {
                exitTransitionPromise = Promise.resolve();
            }

            exitTransitionPromise.then(() => {
                let entryTransitionPromise = null;
                if (this._incomingRoute.props.entryTransition) {
                    entryTransitionPromise = this._incomingRoute.props.entryTransition.execute(this._incomingRoute.getView(), this._exitingRoute.getView());
                }
                else {
                    entryTransitionPromise = Promise.resolve();
                }
                return entryTransitionPromise;
            }).catch((error: Error) => {
                console.error(error);
            }).then(() => {
                this._incomingRoute = null;
                this._exitingRoute = null;
                this.setState({shouldTransition: false});
            });
        }
    }

    /**
     * Gets the number of history entries. Note this does not count the browser history.
     * Only the history kept track during the life-cycle of the app.
     */
    public getHistoryLength(): number {
        return this.state.strategy.getHistoryLength();
    }

    /**
     * Gets the scroll restoration mode
     */
    public getScrollRestoration(): ScrollRestoration {
        return this.state.strategy.getScrollRestoration();
    }

    /**
     *  
     * @param to An integer, positive means go forward, negative means go backwards. E.g:
     *              `1`  move forward one step
     *              `-1` move backward one step
     *              `0`  navigate to the current page (This is essentially a no-op)
     */
    public go(to: number): void {
        this.state.strategy.go(to);
    }

    /**
     * Go back one step. This is an alias for [pushState(-1)]{@link go}.
     */
    public back(): void {
        this.state.strategy.go(-1);
    }

    /**
     * Go forward one step. This is an alias for [pushState(1)]{@link go}.
     */
    public forward(): void {
        this.state.strategy.go(1);
    }

    /**
     * Gets the potential routes
     */
    private _getChildren(): React.ReactElement[] {
        let children: React.ReactElement[] = null;

        if (this.props.children instanceof Array) {
            children = this.props.children as React.ReactElement[];
        }
        else {
            children = [ this.props.children as React.ReactElement ];
        }

        return children;
    }

    /**
     * Finds the index route. Returns null if there are no indexed routes.
     */
    private _getIndexRoute(): React.ReactElement {
        let children: React.ReactElement[] = this._getChildren();
        for (let i: number = 0; i < children.length; i++) {
            let child: React.ReactElement = children[i];
            if (child.props.index) {
                return child;
            }
        }

        return null;
    }
}

export let getRouter = (): RouterStrategy => {
    console.warn('getRouter() is deprecated. use Router.getInstance() instead.');
    return Router.getInstance();
}
