'use strict';

/**
 * @ngdoc directive
 * @name meetUpEventPlannerApp.directive:pandaDatetime
 * @description
 * # pandaDatetime
 */
angular.module('meetUpEventPlannerApp')
  .directive('pandaDatetime', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the pandaDatetime directive');
      }
    };
  });
