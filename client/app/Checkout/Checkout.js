'use strict';

angular.module('uspappApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/Checkout', {
        templateUrl: 'app/Checkout/Checkout.html',
        controller: 'CheckoutCtrl'
      })
      .when('/Checkout/:OrderID', {
        templateUrl: 'app/Checkout/Checkout.html',
        controller: 'CheckoutCtrl'
      });
  });
