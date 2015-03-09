'use strict';

describe('Service: UspServerRest', function () {

  // load the service's module
  beforeEach(module('uspappApp'));

  // instantiate service
  var UspServerRest;
  beforeEach(inject(function (_UspServerRest_) {
    UspServerRest = _UspServerRest_;
  }));

  it('should do something', function () {
    expect(!!UspServerRest).toBe(true);
  });

});
