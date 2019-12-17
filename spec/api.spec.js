
import * as api from '../src/index';
import {version} from '../package.json';
import {Router, getRouter} from '../src/Router';
import {DefaultStrategy} from '../src/DefaultStrategy';
import {HashStrategy} from '../src/HashStrategy';
import {URLStrategy} from '../src/URLStrategy';
import {Route} from '../src/Route';
import {RouterStrategy} from '../src/RouterStrategy';
import {RouteMatcher} from '../src/RouteMatcher';
import {TransitionStrategy} from '../src/TransitionStrategy';
import {TransitionSlide} from '../src/TransitionSlide';
import {Page} from '../src/Page';
import {InvalidPageInterface} from '../src/InvalidPageInterface';

describe('Public API', () => {
    it('version', () => {
        expect(api.version).toBe(version);
    });

    it('Router', () => {
        expect(api.Router).toBe(Router);
    });

    it('getRouter', () => {
        expect(api.getRouter).toBe(getRouter);
    });

    it('DefaultStrategy', () => {
        expect(api.DefaultStrategy).toBe(DefaultStrategy);
    });

    it('HashStrategy', () => {
        expect(api.HashStrategy).toBe(HashStrategy);
    });

    it('URLStrategy', () => {
        expect(api.URLStrategy).toBe(URLStrategy);
    });

    it('Route', () => {
        expect(api.Route).toBe(Route);
    });

    it('RouterStrategy', () => {
        expect(api.RouterStrategy).toBe(RouterStrategy);
    });

    it('RouteMatcher', () => {
        expect(api.RouteMatcher).toBe(RouteMatcher);
    });

    it('TransitionStrategy', () => {
        expect(api.TransitionStrategy).toBe(TransitionStrategy);
    });

    it('TransitionSlide', () => {
        expect(api.TransitionSlide).toBe(TransitionSlide);
    });

    it('Page', () => {
        expect(api.Page).toBe(Page);
    });

    it('InvalidPageInterface', () => {
        expect(api.InvalidPageInterface).toBe(InvalidPageInterface);
    });
});
