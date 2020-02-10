
import {RouterStrategy} from './RouterStrategy';
import { IDictionary } from './IDictionary';
import { Router } from './Router';

/**
    A {@link RouterStrategy} that manages a history stack using inline pound symbols `#`.
    URLs will have a starting point `/#/`, as a default base.

    For example, if you [pushState("mylink")]{@link pushState}, the url
    `/#/mylink` will be produced. 
*/
export class HashStrategy extends RouterStrategy {
    private _base: string;
    private _stack: Array<string>;
    private _position: number;

    public constructor(router: Router) {
        super(router);
        this._base = '#';
        this._stack = [];
        this._position = -1;

        window.addEventListener('popstate', (ev: PopStateEvent) => {
            this._fireURLChange(this.getLocation());
        });

        window.addEventListener('hashchange', (e: HashChangeEvent) => {
            this._fireURLChange(this.getLocation());
        });

        this._init();
    }

    private _init(): void {
        this.pushState(this.getLocation());
    }

    public getLocation(): string {
        return window.location.hash.replace('#', '');
    }

    public getLocationAt(position: number): string {
        return this._stack[this._position + position];
    }

    public getHistoryLength(): number {
        return this._stack.length;
    }

    public getScrollRestoration(): ScrollRestoration {
        return window.history.scrollRestoration;
    }

    public canGo(to: number): boolean {
        return this._stack[this._position + to] !== undefined;
    }

    public peek(to: number): string {
        return this._stack[this._position + to];
    }

    public go(to: number): void {
        if (!this.canGo(to)) {
            return;
        }

        this._position += to;
        let url: string = this._stack[this._position];

        this._navigate(url);
    }

    public pushState(url: string, state?: IDictionary): void {
        if (url === this.getLocation()) {
            //We are already here, so do nothing.
            return;
        }

        if (this._stack.length === 0) {
            this._stack[++this._position] = this.getLocation();
        }

        this._stack[++this._position] = url;

        //clear everything after position.
        this._stack = this._stack.slice(0, this._position + 1);

        this._navigate(url);
    }

    public replaceState(url: string, state?: IDictionary): void {
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

    private _navigate(url: string): void {
        window.location.hash = this._base + url;
        this._fireURLChange(this.getLocation());
    }
}
