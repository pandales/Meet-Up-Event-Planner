'use strict';

/**
 * @ngdoc service
 * @name meetUpEventPlannerApp.formTracker
 * @description
 * # formTracker
 * Service in the meetUpEventPlannerApp.
 */
angular.module('meetUpEventPlannerApp')
  .service('formTracker', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var getErrors = function(angularForm) {
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
      init: function (f) {
        this.form = f;
        this.requiredFields = [];
        for (var i = 0; i < f.elements.length; i++) {
          if (f.elements[i].required) {
            this.requiredFields.push(f.elements[i]);
          }
        }
      },
      getPercent: function (form) {
        return (1 - (getErrors(form) / this.requiredFields.length))*100;
      }

    }
  });
