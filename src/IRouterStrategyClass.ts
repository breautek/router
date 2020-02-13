
import { RouterStrategy } from './RouterStrategy';
import {Router} from './Router';

/**
 * An interface to generically reference a {@link RouterStrategy} class
 */
export interface IRouterStrategyClass {
    new (router: Router): RouterStrategy;
}
