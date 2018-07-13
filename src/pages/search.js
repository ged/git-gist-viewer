/* -*- javascript -*- */
"use strict";

import {inject, LogManager, computedFrom} from 'aurelia-framework';
import {activationStrategy, Router} from 'aurelia-router';
import {GithubClient} from 'lib/githubClient';


@inject( GithubClient, Router )
export class Search {

	users = null;
	error = null;
	query = "";

	searching = false;


	constructor( github, router ) {
		this.logger = LogManager.getLogger( 'search' );
		this.github = github;
		this.router = router;

		this.logger.debug( "Started search. Using github client: ", github );
	}


	activate( params, routeConfig, navigationInstruction ) {
		this.query = params.q;

		if ( this.query ) {
			routeConfig.navModel.setTitle( `Github Users Matching '${this.query}'` );

			return this.github.findUsers( this.query ).
				then( users => {
					this.searching = false;
					this.users = users;
				}).
				catch( err => this.error = err );
		}
	}


	search( text ) {
		return this.router.navigateToRoute( 'search', {q: this.query} );
	}


	determineActivationStrategy() {
		return activationStrategy.invokeLifecycle;
	}

}


