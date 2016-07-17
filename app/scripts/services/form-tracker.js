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
      var errors = 0;
      for (var errorType in angularForm.$error) {
        errors += angularForm.$error[errorType].length;
      }
      return errors;
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
        return (1 - getErrors(form) / this.requiredFields.length)*100;
      }

    }
  });
