
import {RouterStrategy} from './RouterStrategy';
import { Router } from './Router';

/**
 * @notice Using the URLStrategy requires some backend configuration
 * to route URLs back to application.
 *
 * To make this easier, by default these URLs are prefixed with
 * `/r/` to easily differentiate between URLs that needs to be re-routed back
 * to the application vs other resources such as images.
 */
export class URLStrategy extends RouterStrategy {
    private $base: string;
    private $stack: string[];
    private $position: number;

    /**
     * 
     * @param {Router} router 
     */
    public constructor(router: Router) {
        super(router);

        this.$base = window.location.origin + '/r'
        this.$stack = [];
        this.$position = -1;

        window.addEventListener('popstate', () => {
            this._fireURLChange(this.getLocation());
        });

        this.$init();
    }

    private $init(): void {
        this.pushState(this.getLocation());
    }

    public getLocation(): string {
        return window.location.pathname.replace('/r', '');
    }

    public getLocationAt(position: number): string {
        return this.$stack[this.$position + position];
    }

    public getHistoryLength(): number {
        return window.history.length;
    }

    public getScrollRestoration(): ScrollRestoration {
        return window.history.scrollRestoration;
    }

    public peek(to: number): string {
        return this.$stack[this.$position + to];
    }

    public canGo(to: number): boolean {
        return this.$stack[this.$position + to] !== undefined;
    }

    public go(to: number): void {
        if (!this.canGo(to)) {
            return;
        }

        this.$position += to;
        this.$navigate(this.$stack[this.$position]);
    }

    public pushState(url: string, state?: Record<any, any>): void {
        if (state) {
            console.warn('Warning: The state parameter is not implemented yet.');
        }

        if (url === this.getLocation()) {
            //We are already here, so do nothing.
            return;
        }

        this.$stack[++this.$position] = url;

        //clear everything after position.
        this.$stack = this.$stack.slice(0, this.$position + 1);

        this.$navigate(url);
    }

    public replaceState(url: string, state?: Record<any, any>): void {
        if (state) {
            console.warn('Warning: The state parameter is not implemented yet.');
        }

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

    private $navigate(url: string, replace: boolean = false): void {
        if (replace) {
            window.history.replaceState({}, null, this.$base + url);
        }
        else {
            window.history.pushState({}, null, this.$base + url);
        }

        this._fireURLChange(this.getLocation());
    }
}
