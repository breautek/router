
import Router from './Router';
import RouterStrategy from './RouterStrategy';

class HashStrategy extends RouterStrategy {
    private _base: string;
    private _stack: Array<string>;
    private _position: number;

    constructor(router: Router) {
        super(router);
        this._base = '#/';
        this._stack = [];
        this._position = 0;

        window.addEventListener('popstate', (ev: PopStateEvent) => {
            this._fireURLChange(window.location.href);
        });
    }

    public getHistoryLength(): number {
        return window.history.length;
    }

    public getScrollRestoration(): string {
        return window.history.scrollRestoration;
    }

    public canGo(to: number): boolean {
        return !!this._stack[this._position + to]
    }

    public canForward(): boolean {
        return this.canGo(1);
    }

    public canBack(): boolean {
        return this.canGo(-1);
    }

    public go(to: number): void {
        if (!this.canGo(to)) {
            return;
        }

        this._position += to;
        var url: string = this._stack[this._position];

        this._navigate(url);
    }

    public forward(): void {
        this.go(1);
    }

    public back(): void {
        return this.go(-1);
    }

    public pushState(url: string, state?: any): void {
        this._stack.push(url);
        this._position++;
        this._navigate(url);
    }

    public replaceState(url: string, state?: any): void {
        this._stack[this._position] = url;
        this._navigate(url);
    }

    private _navigate(url: string): void {
        window.location.hash = this._base + url;
        this._fireURLChange(window.location.href);
    }
}

export {
    HashStrategy
};

export default HashStrategy;
