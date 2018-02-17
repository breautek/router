"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
exports.EVENT_URL_CHANGE = 'urlchange';
class RouterStrategy extends events_1.EventEmitter {
    constructor(router) {
        super();
        this._router = router;
    }
    getRouter() {
        return this._router;
    }
    addURLChangeCallback(callback) {
        this.on(exports.EVENT_URL_CHANGE, callback);
    }
    removeURLChangeCallback(callback) {
        this.removeListener(exports.EVENT_URL_CHANGE, callback);
    }
    _fireURLChange(url) {
        this.emit(exports.EVENT_URL_CHANGE, url);
    }
}
exports.RouterStrategy = RouterStrategy;
exports.default = RouterStrategy;
