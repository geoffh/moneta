var theRouter = require( 'express' ).Router();
theRouter.get( '/', function( inRequest, inResponse ) {
    inResponse.render( 'data' );
});
module.exports = theRouter;
