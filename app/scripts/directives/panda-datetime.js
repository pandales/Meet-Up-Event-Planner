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
      templateUrl: 'scripts/directives/panda-datetime.html',
      restrict: 'E',
      scope: {
        ngModel: "=",
        ngKeyup: "@",
        id: "@",
        required: "@",
        name: "@",
        label: "@",
        min:"="
      },
      link: function postLink(scope, element, attrs) {
        scope.minDate = scope.dateToString(scope.min);
        if (Modernizr.inputtypes["datetime-local"]) {

          // Remove mdc-date-picker
          element[0].childNodes[2].remove();
        } else {

          // Remove datetime-local input
          element[0].childNodes[0].remove();
        }

        scope.dateToString = function (date) {
          return date.toISOString().slice(0,17) + "00";;
        };
      }
    };
  });
