'use strict';

describe('Controller: EventIndexCtrl', function () {

  // load the controller's module
  beforeEach(module('meetUpEventPlannerApp'));

  var EventIndexCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventIndexCtrl = $controller('EventIndexCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EventIndexCtrl.awesomeThings.length).toBe(3);
  });
});
