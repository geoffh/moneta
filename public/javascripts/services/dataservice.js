'use strict'

angular.module( 'hotelServices' )
.service( 'DataService', [ '$http',
function( $http ) {
    var theAPIRoot = '/api/data/';

    this.getDataTypes = function() {
        return [ 'hotel', 'room', 'reservation' ];
    };

    this.getData = function( inType, inCallback ) {
        $http.get( theAPIRoot + inType )
        .success(
            function( inData, inStatus, inHeaders, inConfig ) {
                if ( inData.error ) {
                    // TODO
                }
                inCallback( inStatus, inData.data );
            } )
        .error(
            function( inData, inStatus, inHeaders, inConfig ) {
                inCallback( inStatus );
            } );
    };

    return this;
}
] );