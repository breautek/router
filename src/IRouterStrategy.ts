
import Router from './Router';
import RouterStrategy from './RouterStrategy';

interface IRouterStrategy {
    new (router: Router): RouterStrategy;
}

export {IRouterStrategy};
export default IRouterStrategy;
