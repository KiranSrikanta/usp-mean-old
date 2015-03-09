'use strict';

angular.module('uspappApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/confirm/:OrderID', {
        templateUrl: 'app/confirm/confirm.html',
        controller: 'ConfirmCtrl'
      });
  });
