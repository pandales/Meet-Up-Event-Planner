'use strict';

/**
 * @ngdoc directive
 * @name meetUpEventPlannerApp.directive:progressForm
 * @description
 * # progressForm
 */
angular.module('meetUpEventPlannerApp')
  .directive('progressForm', ['$timeout', function ($timeout) {
    var getErrors = function (angularForm) {
      var fieldsWithError = {};
      for (var errorType in angularForm.$error) {
        for (var field in angularForm.$error[errorType]) {
          fieldsWithError[angularForm.$error[errorType][field].$name] = true;
        }
      }

      //  return the amount of fields with error
      return Object.keys(fieldsWithError).length;
    };

    return {
      templateUrl: 'scripts/directives/progress-form.html',
      restrict: 'E',
      transclude: true,
      scope: {
        form: "="
      },
      link: function ($scope, element, attrs) {
        $scope.percent = 0;
        $timeout(function () {
          var elementForm = document.getElementsByName($scope.form.$name)[0];
          var requiredFields = [];
          for (var i = 0; i < elementForm.elements.length; i++) {
            if (elementForm.elements[i].required) {
              elementForm.elements[i].addEventListener("keyup", function updatePercent() {
                $scope.percent = (1 - (getErrors($scope.form) / requiredFields.length)) * 100;
              });
              requiredFields.push(elementForm.elements[i]);
            }
          }
        });
      }
    };
  }]);
