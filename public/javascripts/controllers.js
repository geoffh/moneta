'use strict';
var hotelControllers = angular.module( 'hotelControllers', [] );

hotelControllers.controller( 'DataController', ['$scope', '$http',
    function( $scope, $http ) {
	$scope.dataTypes = [
	   { 'displayName': 'Hotels',	    'type': 'hotel' },
	   { 'displayName': 'Rooms',	    'type': 'room' },
	   { 'displayName': 'Reservations', 'type': 'reservation'
	} ];
	$scope.selectedDataType = 'hotel';

	$scope.selectDataType = function() {
	    $scope.dataItems = null;
	    $scope.theColumnDefs = [];
	    $scope.gridOptions = {
		data: 'dataItems',
		columnDefs: 'theColumnDefs'
	    };
	    $http.get( '/api/data/' + $scope.selectedDataType ).success(
		function( inData, inStatus, inHeaders, inConfig ) {
		    if ( inData.error ) {
			//TODO:
			return;
		    }
		    $scope.dataItems = inData.data;
		    for ( var theName in $scope.dataItems[ 0 ] ) {
			$scope.theColumnDefs.push(
			    { field: theName, displayName: theName } );
		    }
		} );
	};
  } ] );
