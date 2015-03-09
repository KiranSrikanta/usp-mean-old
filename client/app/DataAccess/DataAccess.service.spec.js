'use strict';

describe('Service: DataAccess', function () {

  // load the service's module
  beforeEach(module('uspappApp'));

  // instantiate service
  var DataAccess;
  beforeEach(inject(function (_DataAccess_) {
    DataAccess = _DataAccess_;
  }));

  it('should do something', function () {
    expect(!!DataAccess).toBe(true);
  });

});