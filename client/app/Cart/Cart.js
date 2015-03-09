'use strict';

angular.module('uspappApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/Cart', {
        templateUrl: 'app/Cart/Cart.html',
        controller: 'CartCtrl'
      });
  });
