'use strict';

/**
 * @ngdoc function
 * @name meetUpEventPlannerApp.controller:EventAddCtrl
 * @description
 * # EventAddCtrl
 * Controller of the meetUpEventPlannerApp
 */
angular.module('meetUpEventPlannerApp')
  .controller('EventAddCtrl', ['event', 'formTracker', 'account',
    function (event, formTracker, account) {
      var vm = this;
      vm.completedPercent = 0;
      vm.event = {};
      vm.currentUser = account.getCurrentAccount();

      // set the min day as the current day
      vm.today = new Date();

      formTracker.init(addEventForm);

      vm.suggestEventType = function (q) {
        return event.getTypes(q);
      };

      vm.add = function () {
        event.add(vm.event);
      }

    }]);
