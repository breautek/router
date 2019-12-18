'use strict';

import {Page} from './Page';

export class TransitionStrategy {
    constructor() {}

    /**
     * 
     * @param {Page} incomingNode The incoming page
     * @param {Page} exitingNode The exiting/outgoing page
     */
    execute(incomingNode, exitingNode) {
        throw new Error('TransitionStrategy.execute is abstract.');
    }
}

export default TransitionStrategy;

