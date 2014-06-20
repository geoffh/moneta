//TODO: How do I do config. info
var db = require( 'mongoskin' )
    .db( "mongodb://localhost:27017/hotel", { native_parser:true } );

fetchRawData = function( inCollectionName, inCallback ) {
    try {
	db.collection( inCollectionName ).find().toArray(
	    function( inError, inResult ) {
		inCallback( { data: inResult, error: inError } );
	    } );
    } catch( theError ) {
	inCallback( { data: null, error: theError } );
    }
};

module.exports = db;
