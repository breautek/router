'use strict';

export class TransitionStrategy {
	constructor() {}

	/**
		Execute the transition. Should return a promise and resolve when the transition is done.
	*/
	execute(incomingNode, exitingNode) {
		throw new Error('TransitionStrategy.execute is abstract.');
	}
}

export default TransitionStrategy;

