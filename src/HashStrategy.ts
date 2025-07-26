
import {RouterStrategy} from './RouterStrategy';
import { Router } from './Router';

/**
    A {@link RouterStrategy} that manages a history stack using inline pound symbols `#`.
    URLs will have a starting point `/#/`, as a default base.

    For example, if you [pushState("mylink")]{@link pushState}, the url
    `/#/mylink` will be produced. 
*/
export class HashStrategy extends RouterStrategy {
    private $base: string;
    private $stack: string[];
    private $position: number;
    private $lastFiredLocation: string;

    public constructor(router: Router) {
        super(router);
        this.$base = '#';
        this.$stack = [];
        this.$position = -1;
        this.$lastFiredLocation = null;

        window.addEventListener('popstate', (ev: PopStateEvent) => {
            let location = this.getLocation();
            if (this.$lastFiredLocation !== location) {
                this._fireURLChange(location);
            }
        });

        window.addEventListener('hashchange', (e: HashChangeEvent) => {
            let location = this.getLocation();
            if (this.$lastFiredLocation !== location) {
                this._fireURLChange(location);
            }
        });

        this.$init();
    }

    private $init(): void {
        this.pushState(this.getLocation());
    }

    public getLocation(): string {
        return window.location.hash.replace('#', '');
    }

    public getLocationAt(position: number): string {
        return this.$stack[this.$position + position];
    }

    public getHistoryLength(): number {
        return this.$stack.length;
    }

    public getScrollRestoration(): ScrollRestoration {
        return window.history.scrollRestoration;
    }

    public canGo(to: number): boolean {
        return this.$stack[this.$position + to] !== undefined;
    }

    public peek(to: number): string {
        return this.$stack[this.$position + to];
    }

    public go(to: number): void {
        if (!this.canGo(to)) {
            return;
        }

        this.$position += to;
        let url: string = this.$stack[this.$position];

        this.$navigate(url);
    }

    public pushState(url: string, state?: Record<any, any>): void {
        if (url === this.getLocation()) {
            //We are already here, so do nothing.
            return;
        }

        if (this.$stack.length === 0) {
            this.$stack[++this.$position] = this.getLocation();
        }

        this.$stack[++this.$position] = url;

        //clear everything after position.
        this.$stack = this.$stack.slice(0, this.$position + 1);

        this.$navigate(url);
    }

    public replaceState(url: string, state?: Record<any, any>): void {
        if (url === this.getLocation()) {
            //We are already here, so do nothing.
            return;
        }
        
        if (this.$position === -1) {
            this.pushState(url, state);
        }
        else {
            this.$stack[this.$position] = url;
            this.$navigate(url);
        }
    }

    public clear(): void {
        this.$stack = [];
        this.$position = -1;
    }

    private $navigate(url: string): void {
        window.location.hash = this.$base + url;
        this._fireURLChange(this.getLocation());
    }

    protected _fireURLChange(url: string): void {
        this.$lastFiredLocation = url;
        super._fireURLChange(url);
    }
}
