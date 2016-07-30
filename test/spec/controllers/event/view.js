'use strict';

describe('Controller: EventViewCtrl', function () {

  // load the controller's module
  beforeEach(module('meetUpEventPlannerApp'));

  var EventViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventViewCtrl = $controller('EventViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EventViewCtrl.awesomeThings.length).toBe(3);
  });
});
