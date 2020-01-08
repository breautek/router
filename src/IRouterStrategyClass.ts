
import { RouterStrategy } from './RouterStrategy';
import {Router} from './Router';

export interface IRouterStrategyClass {
    new (router: Router): RouterStrategy;
}
