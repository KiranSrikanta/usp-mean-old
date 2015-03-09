'use strict';

describe('Controller: ProductCatalogCtrl', function () {

  // load the controller's module
  beforeEach(module('uspappApp'));

  var ProductCatalogCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductCatalogCtrl = $controller('ProductCatalogCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
