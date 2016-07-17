'use strict';

describe('Controller: AccountRegisterFormCtrl', function () {

  // load the controller's module
  beforeEach(module('meetUpEventPlannerApp'));

  var AccountRegisterFormCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AccountRegisterFormCtrl = $controller('AccountRegisterFormCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AccountRegisterFormCtrl.awesomeThings.length).toBe(3);
  });
});
