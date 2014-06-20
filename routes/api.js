var router = require( 'express' ).Router();
var db = require( './lib/db' );

router.get( '/configuration', function( inRequest, inResponse ) {
} );

router.get( '/hotel_availability', function( inRequest, inResponse ) {
} );

router.get( '/hotel_inventory', function( inRequest, inResponse ) {
} );

router.get( '/data/hotel', function( inRequest, inResponse ) {
    fetchRawData( 'hotel', function( inResult ) {
	inResponse.json( inResult );
    } );
} );

router.get( '/data/room', function( inRequest, inResponse ) {
    fetchRawData( 'room', function( inResult ) {
	inResponse.json( inResult );
    } );
} );

router.get( '/data/reservation', function( inRequest, inResponse ) {
    fetchRawData( 'reservation', function( inResult ) {
	inResponse.json( inResult );
    } );
} );

module.exports = router;
