'use strict';

/*
Using the URLStrategy requires some backend configuration
to route URLs back to application.

To make this easier, by default these URLs are prefixed with
/r/ to easily differentiate between URLs that needs to be re-routed back
to the application vs other resources such as images.
*/

import RouterStrategy from './RouterStrategy';

export class URLStrategy extends RouterStrategy {
    constructor(router) {
        super(router);
        this._base = window.location.origin + '/r'
        this._stack = [];
        this._position = -1;

        window.addEventListener('popstate', (ev) => {
            this._fireURLChange(this.getLocation());
        });

        this._init();
    }

    _init() {
        var loc = this.getLocation();
        this.pushState(loc);
    }

    getLocation() {
        return window.location.pathname.replace('/r', '');
    }

    getLocationAt(position) {
        return this._stack[this._position + position];
    }

    getHistoryLength() {
        return window.history.length;
    }

    getScrollRestoration() {
        return window.history.scrollRestoration;
    }

    peek(to) {
        return this._stack[this._position + to];
    }

    canGo(to) {
        return this._stack[this._position + to] !== undefined;
    }

    go(to) {
        if (!this.canGo(to)) {
            return;
        }

        this._position += to;
        var url = this._stack[this._position];

        this._navigate(url);
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

    _navigate(url, replace) {
        if (replace) {
            window.history.replaceState({}, null, this._base + url);
        }
        else {
            window.history.pushState({}, null, this._base + url);
        }
        this._fireURLChange(this.getLocation());
    }
}

export default URLStrategy;
