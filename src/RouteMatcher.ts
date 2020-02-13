
import {URLParser, IURLParams} from './URLParser';
import {cloneElement} from 'react';
import {IComponentProps, IRouteProps} from './Route';
import {RouterStrategy} from './RouterStrategy';

/**
 * This class is reponsible for determing which route to render
 * based on the URL and the route url patterns.
 */
export class RouteMatcher {
    private _strategy: RouterStrategy;

    public constructor(routerStrategy: RouterStrategy) {
        this._strategy = routerStrategy;
    }

    /**
     * Matches the url to the appropriate renderable route
     * @param url 
     * @param children 
     * @param base 
     * @param indexRoute 
     */
    public match(url: string, children: Array<React.ReactElement>, base: string, indexRoute?: React.ReactElement): React.ReactElement {
        let componentToRender: React.ReactElement = null;
        let params: IURLParams = null;
        for (let i: number = 0; i < children.length; i++) {
            let route: React.ReactElement = children[i];
            let allowPartialMatching: boolean = !!route.props.children;
            let parser: URLParser = new URLParser(base + route.props.url, allowPartialMatching);
            params = parser.parse(url);
            if (params) {
                componentToRender = route;
                break;
            }
        }

        if (!componentToRender) {
            componentToRender = indexRoute;
        }

        if (!componentToRender) {
            if (!base) {
                console.warn('No routes matched, and no index route available.');
            }
            return null;
        }

        let props: IRouteProps<IComponentProps> = {
            url : url,
            base: base + componentToRender.props.url,
            matcher: this,
            component: componentToRender.props.component,
            entryTransition: componentToRender.props.entryTransition,
            exitTransition: componentToRender.props.exitTransition,
            componentProps: {
                url : url,
                router: this._strategy
            }
        };

        if (params) {
            for (let i in params) {
                props.componentProps[i] = params[i];
            }
        }

        return cloneElement(componentToRender, props);
    }
}
