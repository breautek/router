'use strict';

import RouterStrategy from './RouterStrategy';

class HashStrategy extends RouterStrategy {
    constructor(router) {
        super(router);
        this._base = '#';
        this._stack = [];
        this._position =  -1;

        window.addEventListener('popstate', (ev) => {
            this._fireURLChange(this.getLocation());
        });

        window.addEventListener('hashchange', (e) => {
            this._fireURLChange(this.getLocation())
        });

        this._init();
    }

    _init() {
        var loc = this.getLocation();
        this.pushState(loc);
    }

    getLocation() {
        return window.location.hash.replace('#', '');
    }

    getHistoryLength() {
        return window.history.length;
    }

    getScrollRestoration() {
        return window.history.scrollRestoration;
    }

    canGo(to) {
        return this._stack[this._position + to] !== undefined;
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
        if (url === this.getLocation()) {
            //We are already here, so do nothing.
            return;
        }

        this._stack[++this._position] = url;

        //clear everything after position.
        this._stack = this._stack.slice(0, this._position + 1);

        this._navigate(url);
    }

    replaceState(url, state) {
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

    clear() {
        this._stack = [];
        this._position = -1;
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
