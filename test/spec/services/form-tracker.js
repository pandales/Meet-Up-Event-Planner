'use strict';

describe('Service: formTracker', function () {

  // load the service's module
  beforeEach(module('meetUpEventPlannerApp'));

  // instantiate service
  var formTracker;
  beforeEach(inject(function (_formTracker_) {
    formTracker = _formTracker_;
  }));

  it('should do something', function () {
    expect(!!formTracker).toBe(true);
  });

});
