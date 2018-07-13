/* -*- javascript -*- */

import {GithubClient} from 'lib/githubClient';
import {bindable, inject, LogManager} from 'aurelia-framework';

@inject( GithubClient )
export class UserDetail {

	user = null;
	error = null;

	username = null;


	constructor( github ) {
		this.github = github;
		this.logger = LogManager.getLogger( 'user-detail' );
	}


	activate( params, routeConfig, navigationInstruction ) {
		this.username = params.name;

		return this.github.getUser( this.username ).
			then( user => {
				routeConfig.navModel.setTitle( `${user.name} <${user.login}>` );
				this.user = user;
			}).
			catch( err => this.error = err );
	}

}

