'use strict';

/**
 * @ngdoc directive
 * @name meetUpEventPlannerApp.directive:passwordValidator
 * @description Custom directive for validate a password input
 * # passwordValidator
 */
angular.module('meetUpEventPlannerApp')
  .directive('passwordValidator', function () {
    return {
      template: '<div></div>',
      restrict: 'A',
      require: 'ngModel',
      link: function postLink(scope, element, attrs, ctrl) {

        function validationError(value) {
          var isValid = true;
          var message = [];

          if (attrs.hasOwnProperty("minlength") && value.length < attrs.minlength) {
            isValid = false;
            message.push(attrs.name + " must be fewer than " + attrs.minlength + " characters");
          }

          if (attrs.hasOwnProperty("maxlength") && value.length > attrs.maxlength) {
            isValid = false;
            message.push(attrs.name + " must be greater than " + attrs.maxlength + " characters");
          }

          if (!value.match(/[\!\@\#\$\%\^\&\*]/g)) {
            isValid = false;
            message.push(attrs.name + " must have a symbol (!, @, #, $, %, ^, &, *)");
          }

          if (!value.match(/\d/g)) {
            isValid = false;
            message.push(attrs.name + " must have a number");
          }

          if (!value.match(/[a-z]/g)) {
            isValid = false;
            message.push(attrs.name + " must have a lowercase letter");
          }
          if (!value.match(/[A-Z]/g)) {
            isValid = false;
            message.push(attrs.name + " must be have an uppercase letter");
          }

          var illegalCharacterGroup = value.match(/[^A-z0-9\!\@\#\$\%\^\&\*]/g);
          if (illegalCharacterGroup) {
            isValid = false;
            illegalCharacterGroup.forEach(function (illegalChar) {
              message.push(attrs.name + " contains and illegal character: " + illegalChar);
            });
          }

          ctrl.passwordRequerimentsMessage = message;
          ctrl.$setValidity('invalidpassword', isValid);
          return value;
        }

        ctrl.$parsers.push(validationError);
      }
    };
  });
