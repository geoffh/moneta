'use strict'

angular.module( 'hotelServices' )
.service( 'AlertService', [ '$rootScope', '$timeout',
function( $rootScope, $timeout ) {
        var theAlertService;
        $rootScope.alerts = [];
        return theAlertService = {
            add: function( inType, inMessage, inTimeout ) {
                var theResult =  $rootScope.alerts.push( {
                  type: inType,
                  msg: inMessage,
                  close: function() {
                             return theAlertService.closeAlert( this );
                         }
                } );
                if ( inTimeout ) { 
                    $timeout( function() {
                        theAlertService.closeAlert( this ); 
                    },  inTimeout * 1000 ); 
                }
                return theResult;
            },
            addDanger: function( inMessage, inTimeout ) {
                return this.add( 'danger', inMessage, inTimeout );
            },
            addSuccess: function( inMessage, inTimeout ) {
                return this.add( 'success', inMessage, inTimeout );
            },
            closeAlert: function( inAlert ) {
                return this.closeAlertIdx(
                    $rootScope.alerts.indexOf( inAlert ) );
            },
            closeAlertIdx: function( inIndex ) {
                return $rootScope.alerts.splice( inIndex, 1 );
            },
            clear: function(){
                $rootScope.alerts = [];
            }
      };
    }
] );
