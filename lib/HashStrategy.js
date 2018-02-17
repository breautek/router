'use strict';

import Router from './Router';
import RouterStrategy from './RouterStrategy';

class HashStrategy extends RouterStrategy {
    constructor(router) {
        super(router);
        this._base = '#/';
        this._stack = [];
        this._position = 0;

        window.addEventListener('popstate', (ev) => {
            this._fireURLChange(window.location.href);
        });
    }

    getHistoryLength() {
        return window.history.length;
    }

    getScrollRestoration() {
        return window.history.scrollRestoration;
    }

    canGo(to) {
        return !!this._stack[this._position + to]
    }

    canForward() {
        return this.canGo(1);
    }

    canBack() {
        return this.canGo(-1);
    }

    go(to) {
        if (!this.canGo(to)) {
            return;
        }

        this._position += to;
        var url = this._stack[this._position];

        this._navigate(url);
    }

    forward() {
        this.go(1);
    }

    back() {
        return this.go(-1);
    }

    pushState(url, state) {
        this._stack.push(url);
        this._position++;
        this._navigate(url);
    }

    replaceState(url, state) {
        this._stack[this._position] = url;
        this._navigate(url);
    }

    _navigate(url) {
        window.location.hash = this._base + url;
        this._fireURLChange(window.location.href);
    }
}

export {
    HashStrategy
};

export default HashStrategy;
