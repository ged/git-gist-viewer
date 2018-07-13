/* -*- javascript -*- */

import {LogManager} from 'aurelia-framework';
import axios from 'axios';


export class GithubClient {

	static serviceUrl = 'https://api.github.com';


	constructor() {
		this.logger = LogManager.getLogger( 'github-client' );
		this.http = axios.create({
			baseUrl: this.constructor.serviceUrl
		});
	}


	getUser( name ) {
		return this.http.get( `/users/${name}` ).
			then( response => response.data );
	}


	findUsers( text ) {
		return this.http.get( `/search/users`, {params: {q: text}} ).
			then( response => response.data );
	}


}


