'use strict';

describe('Controller: EventAddCtrl', function () {

  // load the controller's module
  beforeEach(module('meetUpEventPlannerApp'));

  var EventAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventAddCtrl = $controller('EventAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EventAddCtrl.awesomeThings.length).toBe(3);
  });
});
