'use strict';

/**
 * @ngdoc function
 * @name meetUpEventPlannerApp.controller:EventAddCtrl
 * @description
 * # EventAddCtrl
 * Controller of the meetUpEventPlannerApp
 */
angular.module('meetUpEventPlannerApp')
  .controller('EventAddCtrl', ['event','formTracker', function (event, formTracker) {
    var vm = this;
    vm.completedPercent = 0;
    vm.event = {};

     // set the min day as the current day
    vm.today = new Date();
  
    formTracker.init(addEventForm);

    vm.suggestEventType = function (q) {
    	return event.getTypes(q);
    };

    vm.track = function (form) {
      console.log("tracking");
      vm.completedPercent = formTracker.getPercent(form);
    };

    vm.add = function () {
  
      event.add(vm.event);
    }

  }]);
