
import "regenerator-runtime/runtime";

export * from './Router';
export * from './DefaultStrategy';
export * from './HashStrategy';
export * from './URLStrategy';
export * from './Route';
export * from './RouterStrategy';
export * from './RouteMatcher';
export * from './TransitionStrategy';
export * from './TransitionSlide';
export * from './View';
export * from './IViewStylesheet';
import packageInfo from '../package.json';
const VERSION: string = packageInfo.version;
export {VERSION as version}
