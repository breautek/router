
import * as React from 'react';
import "./View.scss";
import { RouterStrategy } from './RouterStrategy';
import { IDictionary } from '@totalpave/interfaces';
import { TransitionStrategy } from './TransitionStrategy';

export interface IViewProps {
    router: RouterStrategy;
    entryTransition?: TransitionStrategy;
    exitTransition?: TransitionStrategy;
}

export abstract class View<TPageProps extends IViewProps = IViewProps> extends React.Component<TPageProps> {
    private _node: HTMLDivElement;

    /**
     * @param props See [IViewProps]
     */
    public constructor(props: TPageProps) {
        super(props);
        this._node = null;
    }

    public getCSSClass() {
        return '';
    }

    /**
     * @ignore
     */
    public componentDidMount(): void {
        this.getTitle().then((title: string) => {
            this.props.router.setTitle(title);
        });
    }

    /**
     * @ignore
     */
    public componentWillUnmount(): void {}

    /**
     * Gets the underlying HTML node for this View
     */
    public getNode(): HTMLElement {
        return this._node;
    }

    public async getTitle(): Promise<string> {
        return null;
    }

    /**
     * Get the inline styles for this view.
     * Use React style notation.
     */
    public getViewStyles(): IDictionary<string> {
        return {};
    }

    protected abstract _renderView(): React.ReactNode;

    public render(): React.ReactNode {
        let cssClass: string = this.getCSSClass();
        return (
            <div 
                className={`View${cssClass ? ' ' + cssClass : ''}`}
                ref={(n) => { this._node = n; }}
                style={this.getViewStyles()}
            >
                {this._renderView()}
            </div>
        );
    }
}
