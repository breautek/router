'use strict';

export class InvalidPageInterface extends Error {
	constructor() {
		super('Transition nodes does not follow Page interface. This is likely a route using a non-Page component.');
	}
}

export default InvalidPageInterface;