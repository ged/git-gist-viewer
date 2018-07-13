/* -*- javascript -*- */

import {DateTime} from 'luxon';

const DEFAULT_FORMAT = "MM/DD/YYYY";


export class DateFormatValueConverter {
	toView( value, format=DEFAULT_FORMAT ) {
		if ( !value ) return value;
		let dateTime = DateTime.fromISO( value );
		return dateTime.toFormat( format );
	}
}

