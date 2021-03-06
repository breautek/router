
import {RouterStrategy} from './RouterStrategy';
import { Router } from './Router';
import { IDictionary } from '@totalpave/interfaces';

/**
 * @notice Using the URLStrategy requires some backend configuration
 * to route URLs back to application.
 *
 * To make this easier, by default these URLs are prefixed with
 * `/r/` to easily differentiate between URLs that needs to be re-routed back
 * to the application vs other resources such as images.
 */
export class URLStrategy extends RouterStrategy {
    private _base: string;
    private _stack: Array<string>;
    private _position: number;

    /**
     * 
     * @param {Router} router 
     */
    public constructor(router: Router) {
        super(router);

        this._base = window.location.origin + '/r'
        this._stack = [];
        this._position = -1;

        window.addEventListener('popstate', () => {
            this._fireURLChange(this.getLocation());
        });

        this._init();
    }

    private _init(): void {
        this.pushState(this.getLocation());
    }

    public getLocation(): string {
        return window.location.pathname.replace('/r', '');
    }

    public getLocationAt(position: number): string {
        return this._stack[this._position + position];
    }

    public getHistoryLength(): number {
        return window.history.length;
    }

    public getScrollRestoration(): ScrollRestoration {
        return window.history.scrollRestoration;
    }

    public peek(to: number): string {
        return this._stack[this._position + to];
    }

    public canGo(to: number): boolean {
        return this._stack[this._position + to] !== undefined;
    }

    public go(to: number): void {
        if (!this.canGo(to)) {
            return;
        }

        this._position += to;
        this._navigate(this._stack[this._position]);
    }

    public pushState(url: string, state?: IDictionary): void {
        if (state) {
            console.warn('Warning: The state parameter is not implemented yet.');
        }

        if (url === this.getLocation()) {
            //We are already here, so do nothing.
            return;
        }

        this._stack[++this._position] = url;

        //clear everything after position.
        this._stack = this._stack.slice(0, this._position + 1);

        this._navigate(url);
    }

    public replaceState(url: string, state?: IDictionary): void {
        if (state) {
            console.warn('Warning: The state parameter is not implemented yet.');
        }

        if (url === this.getLocation()) {
            //We are already here, so do nothing.
            return;
        }
        
        if (this._position === -1) {
            this.pushState(url, state);
        }
        else {
            this._stack[this._position] = url;
            this._navigate(url);
        }
    }

    public clear(): void {
        this._stack = [];
        this._position = -1;
    }

    private _navigate(url: string, replace: boolean = false): void {
        if (replace) {
            window.history.replaceState({}, null, this._base + url);
        }
        else {
            window.history.pushState({}, null, this._base + url);
        }
        this._fireURLChange(this.getLocation());
    }
}
