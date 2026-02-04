
import {URLParser, IURLParams} from './URLParser';
import {cloneElement} from 'react';
import {IComponentProps, IRouteProps} from './Route';
import {RouterStrategy} from './RouterStrategy';

/**
 * Will be invoked when no routes are found. Default implementation is to simply return the `indexRoute`.
 * @param {React.ReactElement} indexRoute The `ReactElement` of a `Route`
 * @param {Array<React.ReactElement>} routes An array of `ReactElement` of `Route`
 * @returns {React.ReactElement} An `ReactElement` of a `Route`
 */
export interface IOnNoRouteFunction {
    (indexRoute: React.ReactElement, routes: React.ReactElement<IRouteProps>[]): React.ReactElement<IRouteProps>;
}

/**
 * This class is reponsible for determing which route to render
 * based on the URL and the route url patterns.
 */
export class RouteMatcher {
    private $strategy: RouterStrategy;

    public constructor(routerStrategy: RouterStrategy) {
        this.$strategy = routerStrategy;
    }

    private $defaultNoRouteFunction(indexRoute: React.ReactElement<IRouteProps>, routes: React.ReactElement<IRouteProps>[]): React.ReactElement<IRouteProps> {
        return indexRoute;
    }

    /**
     * Matches the url to the appropriate renderable route
     * 
     * @param url 
     * @param children 
     * @param base 
     * @param indexRoute 
     * @param onNoRoute
     */
    public match(url: string, children: React.ReactElement<IRouteProps>[], base: string, indexRoute?: React.ReactElement<IRouteProps>, onNoRoute?: IOnNoRouteFunction): React.ReactElement<IRouteProps> {
        let componentToRender: React.ReactElement<IRouteProps> = null;
        let params: IURLParams = null;
        for (let i: number = 0; i < children.length; i++) {
            let route: React.ReactElement<IRouteProps> = children[i];
            let shouldAllowPartialMatching: boolean = !!route.props.children;
            let parser: URLParser = new URLParser(base + route.props.url, shouldAllowPartialMatching);
            params = parser.parse(url);
            if (params) {
                componentToRender = route;
                break;
            }
        }

        if (!componentToRender) {
            componentToRender = (onNoRoute ? onNoRoute : this.$defaultNoRouteFunction)(indexRoute, children);
        }

        if (!componentToRender) {
            if (!base) {
                console.warn('No routes matched, and no index route available.');
            }
            return null;
        }

        let props: IRouteProps<any, IComponentProps> = {
            url : url,
            __base: base + componentToRender.props.url,
            __matcher: this,
            component: componentToRender.props.component,
            entryTransition: componentToRender.props.entryTransition,
            exitTransition: componentToRender.props.exitTransition,
            componentProps: componentToRender.props.componentProps,
            __componentProps: {
                ...componentToRender.props.componentProps,
                url : url,
                router: this.$strategy
            }
        };

        if (params) {
            for (let i in params) {
                props.__componentProps[i] = params[i];
            }
        }

        return cloneElement(componentToRender, props);
    }
}
