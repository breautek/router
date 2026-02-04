
import * as React from 'react';
import { RouterStrategy } from './RouterStrategy';
import { TransitionStrategy } from './TransitionStrategy';
import { IViewStylesheet } from './IViewStylesheet';

import "./View.scss";

export interface IViewProps {
    router: RouterStrategy;
    entryTransition?: TransitionStrategy;
    exitTransition?: TransitionStrategy;
}

export interface IViewState {}

export interface IViewSnapshotState {}

export abstract class View<TPageProps extends IViewProps = IViewProps, TPageState extends IViewState = IViewState, TPageSnapshotState extends IViewSnapshotState = IViewSnapshotState> extends React.Component<TPageProps, TPageState, TPageSnapshotState> {
    private $node: HTMLDivElement;

    /**
     * @param props See [IViewProps]
     */
    public constructor(props: TPageProps) {
        super(props);
        this.$node = null;
        this.state = this._initState();
    }

    protected abstract _initState(): TPageState;

    /**
     * Return the CSS class on this view
     */
    public getCSSClass(): string {
        return '';
    }

    /**
     * Override to return a webpack API style stylesheet
     */
    public getViewStylesheet(): IViewStylesheet {
        return null;
    }

    protected _getViewBodyClass(): string {
        return this.constructor.name;
    }

    public componentDidMount(): void {
        this.getTitle().then((title: string) => {
            this.props.router.setTitle(title);
        }).catch((e) => {
            console.error(e);
        });

        document.body.classList.add(this.$getViewBodyClass());

        let stylesheet: IViewStylesheet = this.getViewStylesheet();
        if (stylesheet) {
            stylesheet.use();
        }

        this.props.router.__onViewMount(this);
    }

    private $getViewBodyClass(): string {
        return `${this._getViewBodyClass()}-body`;
    }

    public componentWillUnmount(): void {
        document.body.classList.remove(this.$getViewBodyClass());
        let stylesheet: IViewStylesheet = this.getViewStylesheet();
        if (stylesheet) {
            stylesheet.unuse();
        }
        this.props.router.__onViewUnmount(this);
    }

    /**
     * Gets the underlying HTML node for this View
     */
    public getNode(): HTMLElement {
        return this.$node;
    }

    /**
     * Get the title of this view
     */
    public async getTitle(): Promise<string> {
        return null;
    }

    /**
     * Get the inline styles for this view.
     * Use React style notation.
     */
    public getViewStyles(): React.CSSProperties {
        return {};
    }

    protected abstract _renderView(): React.ReactNode;

    public render(): React.ReactNode {
        let cssClass: string = this.getCSSClass();
        return (
            <div
                className={`View${cssClass ? ' ' + cssClass : ''}`}
                ref={(n) => { this.$node = n; }}
                style={this.getViewStyles()}
            >
                {this._renderView()}
            </div>
        );
    }
}
