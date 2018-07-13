/* -*- javascript -*- */

import {App} from 'app';

class StubRouter {}
class StubRouterConfig {
	map( routes ) { return this; }
	fallbackRoute( options ) { return this; }
}


describe('the app', () => {

	it('sets up the router', () => {
		let app = new App(),
			router = new StubRouter(),
			config = new StubRouterConfig();

		app.configureRouter( config, router );

		expect( app.router ).toBe( router );
	});

});
