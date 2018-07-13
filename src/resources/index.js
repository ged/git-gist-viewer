/* -*- javascript -*- */

import {PLATFORM} from 'aurelia-pal';

export function configure(config) {
	config.globalResources(
		PLATFORM.moduleName('resources/value-converters/date-format'),
		PLATFORM.moduleName('resources/value-converters/json')
	);
}

