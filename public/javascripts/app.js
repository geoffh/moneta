'use strict';

angular.module( 'hotelControllers', [] );
angular.module( 'hotelServices', [] );
angular.module( 'hotelApp',
    [ 'hotelControllers',
      'hotelServices',
      'ngGrid',
      'ui.bootstrap' ] );