/* -*- javascript -*- */

import {PLATFORM} from 'aurelia-pal';
import {LogManager} from 'aurelia-framework';

import 'skeleton-css/css/normalize.css';
import 'skeleton-css/css/skeleton.css';


const ROUTES = [
	{
		route: 'search',
		name: 'search',
		moduleId: PLATFORM.moduleName('pages/search'),
		title: 'Search'
	},

	{
		route: 'users/:name',
		name: 'userDetail',
		moduleId: PLATFORM.moduleName('pages/user-detail')
	},

	{
		route: 'error',
		name: 'errorReport',
		moduleId: PLATFORM.moduleName('pages/error-report'),
		title: 'Ooops!'
	},

	{
		route: '',
		redirect: 'search'
	}

];


export class App {

	router = null;


	constructor() {
		this.logger = LogManager.getLogger( 'app' );
	}

	configureRouter( config, router ) {
		this.logger.debug( "Setting up the main router." );
		this.router = router;

		config.title = 'Gist Viewer';
		config.
			map( ROUTES ).
			fallbackRoute( 'error' );
	}


}
