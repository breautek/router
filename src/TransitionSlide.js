'use strict';

import TransitionStrategy from './TransitionStrategy';
import InvalidPageInterface from './InvalidPageInterface';

export class TransitionSlide extends TransitionStrategy {
	constructor() {
		super();
	}

	execute(incoming, exiting) {
		if (!incoming.getNode || !exiting.getNode) {
			throw new InvalidPageInterface();
		}

		console.log(incoming.getNode(), exiting.getNode());
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve();
			}, 10000000);
		});
	}
}

export default TransitionSlide;