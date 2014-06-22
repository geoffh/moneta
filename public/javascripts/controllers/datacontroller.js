'use strict';

angular.module( 'hotelControllers' )
.controller( 'DataController', [ '$scope', '$http', 'DataService', 'AlertService',
function( $scope, $http, DataService, AlertService ) {
    $scope.dataTypes = DataService.getDataTypes();
    $scope.selectedDataType = $scope.dataTypes[ 0 ];

    $scope.selectDataType = function() {
        $scope.dataItems = null;
	$scope.theColumnDefs = [];
	$scope.gridOptions = {
	    data: 'dataItems',
	    columnDefs: 'theColumnDefs'
	};
        DataService.getData( $scope.selectedDataType,
            function( inStatus, inData ) {
                if ( inData ) {
                    $scope.dataItems = inData;
                    for ( var theName in $scope.dataItems[ 0 ] ) {
                        $scope.theColumnDefs.push(
		            { field: theName, displayName: theName } );
                    }
                }
            } );
    };
} ] );
