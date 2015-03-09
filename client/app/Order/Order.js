'use strict';

angular.module('uspappApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/Order/:ProductID', {
        templateUrl: 'app/Order/Order.html',
        controller: 'OrderCtrl'
      })
      .when('/Order/:ProductID/:ModelID', {
        templateUrl: 'app/Order/Order.html',
        controller: 'OrderCtrl'
      });
  });
