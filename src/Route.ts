
import {Component, ReactNode} from 'react';

interface RouteProps {
    component: Component;
    path: string;
}

interface RouteState {

}

class Route extends Component<RouteProps, RouteState> {
    public constructor(props: RouteProps) {
        super(props);
    }

    public render(): ReactNode {
        return null;
    }
}