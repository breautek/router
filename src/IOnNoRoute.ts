
import * as React from 'react';

export interface IOnNoRoute {
    (indexRoute: React.ReactElement, routes: Array<React.ReactElement>): React.ReactElement;
}
