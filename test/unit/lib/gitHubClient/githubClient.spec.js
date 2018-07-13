/* -*- javascript -*- */

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {GithubClient} from 'lib/githubClient';

// Mock Github's API
const Github = new MockAdapter( axios );


describe('the Github client', () => {

	let client = null;

	beforeEach( () => {
		client = new GithubClient();
	});


	describe( "fetching user info", () => {

		it( "returns the data on success", () => {
			Github.onGet( '/users/ged' ).reply( 200, {id: 13501} );
			return expect( client.getUser('ged') ).resolves.toEqual( {id: 13501} );
		});


		it( "rejects with an error on failure", () => {
			Github.onGet( '/users/ged' ).reply( 404, {error: "No such user"} );
			return expect( client.getUser('ged') ).rejects.toThrowError( /status code 404/i );
		});


	});


	describe( "searching for users", () => {

		it( "returns the data on success", () => {
			Github.onGet( '/search/users', {params: {q: 'greg'}} ).
				reply( 200, [{id: 877263}, {id: 12884}] );
			return expect( client.findUsers('greg') ).resolves.toEqual( [{id: 877263}, {id: 12884}] );
		});


		it( "rejects with an error on failure", () => {
			Github.onGet( '/search/users', {params: {q: 'greg'}} ).
				reply( 500, {error: "Server failure"} );
			return expect( client.findUsers('greg') ).rejects.toThrowError( /status code 500/i );
		});


	});

});
