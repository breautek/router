
import * as Enzyme from 'enzyme';
import {
    IRouterProps,
    IRouterState
} from '../../src/Router';

export type RouterWrapper = Enzyme.ReactWrapper<IRouterProps, IRouterState, React.Component<IRouterProps, IRouterState>>;
