
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
    children?: React.ReactNode;
    onNoRoute?: IOnNoRoute;
}

export interface IRouterState {
    strategy: RouterStrategy;
    url: string;
    shouldTransition: boolean;
}

export class Router<TRouterProps extends IRouterProps = IRouterProps> extends React.Component<TRouterProps, IRouterState> {
    public state: IRouterState;
    
    private $lastRenderedRoute: any;
    private $matcher: RouteMatcher;
    private $awaitingTransition: boolean;
    private $incomingRoute: Route;
    private $exitingRoute: Route;

    private static $instance: Router;

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

        this.$lastRenderedRoute = null;
        this.$onURLChange = this.$onURLChange.bind(this);
        this.$matcher = new RouteMatcher(strategy);
    }

    public static getInstance(): RouterStrategy {
        if (!Router.$instance) {
            return null;
        }
    
        return Router.$instance.getRouterStrategy();
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
    private $onURLChange(url: string): void {
        if (url !== this.state.url) {
            this.setState({
                url: url,
                shouldTransition : true
            });
        }
    }

    public componentDidMount(): void {
        Router.$instance = this;
        this.state.strategy.addURLChangeCallback(this.$onURLChange);
    }

    /**
     * @ignore
     */
    public UNSAFE_componentWillReceiveProps(nextProps: TRouterProps): void {
        if (nextProps.strategy && (this.state.strategy instanceof nextProps.strategy)) {
            this.state.strategy.removeURLChangeCallback(this.$onURLChange);
            let strat: RouterStrategy = new nextProps.strategy(this);
            strat.addURLChangeCallback(this.$onURLChange);
            this.setState({
                strategy: strat
            });
        }
    }

    /**
     * @ignore
     */
    public componentWillUnmount(): void {
        Router.$instance = null;
        this.state.strategy.removeURLChangeCallback(this.$onURLChange);
    }

    /**
     * @ignore
     */
    public render(): React.ReactNode {
        let currentRoute: React.ReactElement = this.$matcher.match(this.state.url || '/', this.$getChildren(), '', this.$getIndexRoute(), this.props.onNoRoute);
        // eslint-disable-next-line @typescript-eslint/naming-convention
        let Root: React.ElementType = null;
        if (this.props.component) {
            Root = this.props.component as unknown as React.ElementType;
        }

        if (
            this.state.shouldTransition && (
                currentRoute.props.entryTransition || (
                    this.$lastRenderedRoute &&
                    this.$lastRenderedRoute.props.exitTransition
                )
            )
        ) {
            this.$awaitingTransition = true;
            let exiting: React.ReactElement = null;
            if (this.$lastRenderedRoute) {
                exiting = React.cloneElement(this.$lastRenderedRoute, {
                    ref : (route: Route) => {
                        this.$exitingRoute = route;
                    }
                });
            }

            // Incoming will always be safe to render, hence no defensive checks
            let incoming: React.ReactElement = React.cloneElement(currentRoute, {
                ref : (route: Route) => {
                    this.$incomingRoute = route;
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
            this.$lastRenderedRoute = currentRoute;

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
        if (this.$awaitingTransition) {
            this.$awaitingTransition = false;
            let exitTransitionPromise: Promise<void> = null;
            if (this.$exitingRoute && this.$exitingRoute.props.exitTransition) {
                exitTransitionPromise = this.$exitingRoute.props.exitTransition.execute(this.$incomingRoute.getView(), this.$exitingRoute.getView());
            }
            else {
                exitTransitionPromise = Promise.resolve();
            }

            exitTransitionPromise.then(() => {
                let entryTransitionPromise = null;
                if (this.$incomingRoute && this.$incomingRoute.props.entryTransition) {
                    entryTransitionPromise = this.$incomingRoute.props.entryTransition.execute(this.$incomingRoute.getView(), this.$exitingRoute.getView());
                }
                else {
                    entryTransitionPromise = Promise.resolve();
                }
                return entryTransitionPromise;
            }).catch((error: Error) => {
                console.error(error);
            }).then(() => {
                this.$incomingRoute = null;
                this.$exitingRoute = null;
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
    private $getChildren(): React.ReactElement[] {
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
    private $getIndexRoute(): React.ReactElement {
        let children: React.ReactElement[] = this.$getChildren();
        for (let i: number = 0; i < children.length; i++) {
            let child: React.ReactElement = children[i];
            if (child.props.index) {
                return child;
            }
        }

        return null;
    }
}

/**
 * @deprecated Use Router.getInstance() instead.
 * @returns {RouterStrategy}
 */
export let getRouter = (): RouterStrategy => {
    console.warn('getRouter() is deprecated. use Router.getInstance() instead.');
    return Router.getInstance();
}
