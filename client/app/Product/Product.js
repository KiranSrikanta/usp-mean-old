'use strict';

angular.module('uspappApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/Product/:item', {
        templateUrl: 'app/Product/Product.html',
        controller: 'ProductCtrl'
      });
  });
