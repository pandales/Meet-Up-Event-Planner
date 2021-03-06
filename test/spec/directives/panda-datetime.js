'use strict';

describe('Directive: pandaDatetime', function () {

  // load the directive's module
  beforeEach(module('meetUpEventPlannerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<panda-datetime></panda-datetime>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the pandaDatetime directive');
  }));
});
