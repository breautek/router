import { IRouterStrategy } from "./IRouterStrategy";
import Router from "./Router";
import {EventEmitter} from 'events';

export const EVENT_URL_CHANGE = 'urlchange';
export interface URLChangeCallback {
    (url: string): void;
}

abstract class RouterStrategy extends EventEmitter {
    private _router: Router;

    constructor(router: Router) {
        super();
        this._router = router;

        
    }

    public getRouter(): Router {
        return this._router;
    }

    public addURLChangeCallback(callback: URLChangeCallback): void {
        this.on(EVENT_URL_CHANGE, callback);
    } 

    public removeURLChangeCallback(callback: URLChangeCallback): void {
        this.removeListener(EVENT_URL_CHANGE, callback);
    }

    public abstract getHistoryLength(): number;
    public abstract getScrollRestoration(): string;
    public abstract go(to: number): void;
    public abstract canGo(to: number): boolean;
    public abstract canBack(): boolean;
    public abstract canForward(): boolean;
    public abstract pushState(url: string, state?: any): void;
    public abstract replaceState(url: string, state?: any): void;

    protected _fireURLChange(url: string): void {
        this.emit(EVENT_URL_CHANGE, url);
    }
}

export {RouterStrategy};
export default RouterStrategy;
