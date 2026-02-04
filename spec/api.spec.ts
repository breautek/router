
import * as api from '../src/api';
import packageInfo from '../package.json';
import {Router} from '../src/Router';
import {DefaultStrategy} from '../src/DefaultStrategy';
import {HashStrategy} from '../src/HashStrategy';
import {URLStrategy} from '../src/URLStrategy';
import {Route} from '../src/Route';
import {RouterStrategy} from '../src/RouterStrategy';
import {RouteMatcher} from '../src/RouteMatcher';
import {TransitionStrategy} from '../src/TransitionStrategy';
import {TransitionSlide} from '../src/TransitionSlide';
import {View} from '../src/View';

const VERSION: string = packageInfo.version;

describe('Public API', () => {
    it('version', () => {
        expect(api.version).toBe(VERSION);
    });

    it('Router', () => {
        expect(api.Router).toBe(Router);
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

    it('View', () => {
        expect(api.View).toBe(View);
    });
});
