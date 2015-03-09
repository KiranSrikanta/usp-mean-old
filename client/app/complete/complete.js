'use strict';

angular.module('uspappApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/complete/:OrderID', {
        templateUrl: 'app/complete/complete.html',
        controller: 'CompleteCtrl'
      });
  });
