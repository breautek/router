
import * as React from 'react';
import "./Page.scss";
import { RouterStrategy } from './RouterStrategy';
import { IDictionary } from './IDictionary';
import { TransitionStrategy } from './TransitionStrategy';

export interface IPageProps {
    router: RouterStrategy;
    entryTransition?: TransitionStrategy;
    exitTransition?: TransitionStrategy;
}

export abstract class Page<TPageProps extends IPageProps = IPageProps> extends React.Component<TPageProps> {
    private _node: HTMLDivElement;

    public constructor(props: TPageProps) {
        super(props);
        this._node = null;
    }

    public componentDidMount(): void {
        this.getTitle().then((title: string) => {
            this.props.router.setTitle(title);
        });
    }

    public getNode(): HTMLElement {
        return this._node;
    }

    public getTitle(): Promise<string> {
        return Promise.resolve(null);
    }

    public getPageStyles(): IDictionary<string> {
        return {};
    }

    protected abstract $render(): React.ReactNode;

    public render(): React.ReactNode {
        return (
            <div 
                className="bt_router_Page"
                ref={(n) => { this._node = n; }}
                style={this.getPageStyles()}
            >
                {this.$render()}
            </div>
        );
    }
}
