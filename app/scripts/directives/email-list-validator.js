'use strict';

/**
 * @ngdoc directive
 * @name meetUpEventPlannerApp.directive:emailListValidator
 * @description
 * # emailListValidator
 */
angular.module('meetUpEventPlannerApp')
  .directive('emailListValidator', function () {
    var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    var isEmailValid = function (email) {
      return re.test(email);
    };

    return {
      template: '<div></div>',
      restrict: 'A',
      require: 'ngModel',
      link: function postLink(scope, element, attrs, ctrl) {
        function validationError(value) {
          var isValid = true;
          var emails = value.split(",");

          for (var index in emails) {
            if(!isEmailValid(emails[index].trim())){
              isValid = false;
            }
          }
          ctrl.$setValidity('invalidemail', isValid);
          return value;
        }

        ctrl.$parsers.push(validationError);
      }
    };
  });
