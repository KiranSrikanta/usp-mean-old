'use strict';

angular.module('uspappApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/ProductCatalog/:Parent/:Child', {
        templateUrl: 'app/ProductCatalog/ProductCatalog.html',
        controller: 'ProductCatalogCtrl'
      });
  });
