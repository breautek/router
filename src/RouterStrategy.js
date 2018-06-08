'use strict';

import {EventEmitter} from 'events';

export const EVENT_URL_CHANGE = 'urlchange';

class RouterStrategy extends EventEmitter {

    constructor(router) {
        super();
        this._router = router;
    }

    getRouter() {
        return this._router;
    }

    addURLChangeCallback(callback) {
        this.on(EVENT_URL_CHANGE, callback);
    } 

    removeURLChangeCallback(callback) {
        this.removeListener(EVENT_URL_CHANGE, callback);
    }

    getLocation() {
        throw new Error('getLocation is abstract.');
    }

    getHistoryLength() {
        throw new Error('getHistoryLength is abstract.');
    }

    getScrollRestoration() {
        throw new Error('getScrollRestoration is abstract.');
    }

    go(to) {
        throw new Error('go is abstract.');
    }

    canGo(to) {
        throw new Error('canGo is abstract.');
    }

    canBack() {
        throw new Error('canBack is abstract.');
    }

    canForward() {
        throw new Error('canForward is abstract.');
    }

    pushState(url, state) {
        throw new Error('pushState is abstract.');
    }

    replaceState(url, state) {
        throw new Error('replaceState is abstract.');
    }

    clear() {
        throw new Error('clear is abstract.');
    }

    _fireURLChange(url) {
        this.emit(EVENT_URL_CHANGE, url);
    }
}

export {RouterStrategy};
export default RouterStrategy;
