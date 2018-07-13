/**
 * ValueConverter for dumping JSON (mostly for debugging)
 */

export class JsonValueConverter {
	toView( object, indent=2 ) {
		return JSON.stringify( object, null, indent );
	}
}

