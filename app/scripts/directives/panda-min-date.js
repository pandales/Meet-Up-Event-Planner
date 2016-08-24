'use strict';

/**
 * @ngdoc directive
 * @name meetUpEventPlannerApp.directive:pandaMinDate
 * @description
 * # pandaMinDate
 */
angular.module('meetUpEventPlannerApp')
  .directive('pandaMinDate', function () {
    return {
      template: '<div></div>',
      restrict: 'A',
      require: 'ngModel',
      /*transclude: true,*/
      link: function postLink(scope, element, attrs, ctrl) {
        function validationError(value) {
          var isValid = true;
          var minTime = new Date(attrs.min).getTime();
          var selectedTime = new Date(value).getTime();

          if (selectedTime <= minTime) {
            isValid = false;
          }
          ctrl.$setValidity('mindatelocal', isValid);
          return value;
        }

        ctrl.$parsers.push(validationError);
      }
    };
  });
