
import * as React from 'react';
import { IRouteProps } from 'Route';

export interface IOnNoRoute {
    (indexRoute: React.ReactElement<IRouteProps>, routes: React.ReactElement<IRouteProps>[]): React.ReactElement<IRouteProps>;
}
