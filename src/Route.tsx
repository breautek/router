
import * as React from 'react';
import { View } from './View';
import { RouteMatcher } from './RouteMatcher';
import { RouterStrategy } from './RouterStrategy';
import { TransitionStrategy } from 'TransitionStrategy';

export interface IRouteProps<T> {
    url: string;
    component: React.ComponentClass<any>;
    index?: boolean;
    entryTransition?: TransitionStrategy;
    exitTransition?: TransitionStrategy;

    base?: string;
    componentProps?: T;
    matcher?: RouteMatcher;
}

export interface IComponentProps {
    url: string;
    router: RouterStrategy;

    //Generally these keys come from URl parameters, and therefore they will
    //be strings, however typescript does not allow us to define this as strings,
    //and have other defined non-string keys.
    [key: string]: any;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IRouteState {

}

/**
 * This class represents a route that renders a {@link View} component
 */
export class Route<TComponentProps extends IComponentProps = IComponentProps, TRouteProps extends IRouteProps<TComponentProps> = IRouteProps<TComponentProps>, TRouteState extends IRouteState = IRouteState> extends React.Component<TRouteProps, TRouteState> {
    private _node: View;

    constructor(props: TRouteProps) {
        super(props);
        this.render
    }

    public render(): React.ReactNode {
        return this._getComponentsToRender(this);
    }

    public getView(): View {
        return this._node;
    }

    private _getComponentsToRender(component: React.ReactElement | React.Component): React.ReactNode {
        let url: string = component.props.url;
        let base: string = component.props.base || '';

        // eslint-disable-next-line @typescript-eslint/naming-convention
        let ViewComponent: React.ElementType = component.props.component;
        let child: React.ReactNode;

        let routeComponent = component.props.matcher.match(url, this._getChildren(component), base);
        if (routeComponent) {
            child = this._getComponentsToRender(routeComponent);
        }

        return (
            <ViewComponent
                {...component.props.componentProps}
                ref={(node: React.Component) => {
                    if (node) {
                        if (node instanceof View) {
                            this._node = node;
                        }
                        else {
                            throw new Error('Routed components should be a View, but got ' + Object.getPrototypeOf(node).constructor.name + ' instead.');
                        }
                    }
                    else {
                        this._node = null;
                    }
                }}
            >
                {child}
            </ViewComponent>
        );
    }

    private _getChildren(component: React.Component | React.ReactElement): React.ReactElement[] {
        let children: React.ReactElement[] = null;

        if (!component) {
            component = this;
        }
        
        if (!component.props.children) {
            return [];
        }

        if (component.props.children instanceof Array) {
            children = component.props.children as React.ReactElement[];
        }
        else {
            children = [ component.props.children as React.ReactElement ];
        }

        return children;
    }
}
