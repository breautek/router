import { EventEmitter } from 'events';
import { Router } from './Router';
import {View} from './View';

export const EVENT_URL_CHANGE: string = 'urlchange';

export type URLChangeCallback = (url: string) => void;

/**
 * Invoked when the view's componentDidMount/componentWillUnmount fires.
 */
export type ViewMountChangeCallback = (view: View) => void;

export abstract class RouterStrategy extends EventEmitter {
    private $router: Router;

    private $viewMountListeners: ViewMountChangeCallback[];
    private $viewUnmountListneners: ViewMountChangeCallback[];

    public constructor(router: Router) {
        super();
        this.$router = router;
        this.$viewMountListeners = [];
        this.$viewUnmountListneners = [];
    }

    public addViewMountCallback(cb: ViewMountChangeCallback): void {
        this.$viewMountListeners.push(cb);
    }

    public removeViewMountCallback(cb: ViewMountChangeCallback): void {
        let idx: number = this.$viewMountListeners.indexOf(cb);
        if (idx > -1) {
            this.$viewMountListeners.splice(idx, 1);
        }
    }

    public addViewUnmountCallback(cb: ViewMountChangeCallback): void {
        this.$viewUnmountListneners.push(cb);
    }

    public removeViewUnmountCallback(cb: ViewMountChangeCallback): void {
        let idx: number = this.$viewUnmountListneners.indexOf(cb);
        if (idx > -1) {
            this.$viewUnmountListneners.splice(idx, 1);
        }
    }

    /**
     * @internal
     * @param view 
     */
    public __onViewMount(view: View): void {
        for (let i: number = 0; i < this.$viewMountListeners.length; i++) {
            this.$viewMountListeners[i](view);
        }
    }

    /**
     * @internal
     * @param view 
     */
    public __onViewUnmount(view: View): void {
        for (let i: number = 0; i < this.$viewUnmountListneners.length; i++) {
            this.$viewUnmountListneners[i](view);
        }
    }

    /**
     * Gets the router
     */
    public getRouter(): Router {
        return this.$router;
    }

    /**
     * Sets the browser title
     * 
     * @param {string} title 
     */
    public setTitle(title: string): void {
        let head: HTMLTitleElement = document.head.getElementsByTagName('title')[0];

        if (!head) {
            head = document.createElement('title');
            document.head.appendChild(head);
        }

        if (!title) {
            title = '';
        }

        head.innerText = title.toString();
    }

    /**
     * Listen for URL change events
     * 
     * @param callback 
     */
    public addURLChangeCallback(callback: URLChangeCallback): void {
        this.on(EVENT_URL_CHANGE, callback);
    }

    /**
     * Removes an existing listener
     * 
     * @param callback
     */
    public removeURLChangeCallback(callback: URLChangeCallback): void {
        this.off(EVENT_URL_CHANGE, callback);
    }

    /**
     * Gets the URL at the given index in the history stack
     * @param position index
     */
    public abstract getLocationAt(position: number): string;

    /**
     * Gets the current location.
     * This is the same as calling [peek(0)]{@link peek}
     */
    public abstract getLocation(): string;

    /**
     * Gets the size of the history stack
     */
    public abstract getHistoryLength(): number;

    /**
     * Gets the scroll restoration
     */
    public abstract getScrollRestoration(): ScrollRestoration;

    /**
     * Navigates the history
     * @param to Must be an integer. 
     * Negative numbers go back, if possible.
     * Positive goes forward, if possible.
     * Zero does nothing.
     */
    public abstract go(to: number): void;

    /**
     * navigate the history forward one entry. This is an alias for [go(1)]{@link go}
     */
    public forward(): void {
        this.go(1);
    }

    /**
     * Navigate the history back one entry. This is an alias for [go(-1)]{@link go}
     */
    public back(): void {
        this.go(-1);
    }

    /**
     * Returns true, if can be navigated to the given relative index
     * @param to Must be an integer
     */
    public abstract canGo(to: number): boolean;

    /**
     * Returns true if can go back 1 entry.
     * This is the same as calling [canGo(-1)]{@link canGo}
     */
    public canBack(): boolean {
        return this.canGo(-1);
    }

    /**
     * Returns true if can go forward 1 entry.
     * This is the same as calling [canGo(1)]{@link canGo}
     */
    public canForward(): boolean {
        return this.canGo(1);
    }

    /**
     * Returns the URL stored in the history stack at the given relative index.
     * @param to Must be an integer
     */
    public abstract peek(to: number): string;

    /**
     * Returns the URL one entry forward.
     * This is the same as calling [peek(1)]{@link peek}
     */
    public peekForward(): string {
        return this.peek(1);
    }

    /**
     * Returns the URL one entry back.
     * This is the same as calling [peek(-1)]{@link peek}
     */
    public peekBack(): string {
        return this.peek(-1);
    }

    /**
     * Pushes a new entry into the history stack, navigating to the new location.
     * @param url 
     * @param state 
     */
    public abstract pushState(url: string, state?: Record<any, any>): void;

    /**
     * Replaces the current entry in the history stack with the new location.
     * This will navigate the screen to the new location.
     * @param url
     * @param state 
     */
    public abstract replaceState(url: string, state?: Record<any, any>): void;

    /**
     * Clears the history stack.
     */
    public abstract clear(): void;

    /**
     * Fires the {@link EVENT_URL_CHANGE} event
     * @param url 
     */
    protected _fireURLChange(url: string): void {
        this.emit(EVENT_URL_CHANGE, url);
    }
}
