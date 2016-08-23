'use strict';

/**
 * @ngdoc function
 * @name meetUpEventPlannerApp.controller:EventAddCtrl
 * @description
 * # EventAddCtrl
 * Controller of the meetUpEventPlannerApp
 */
angular.module('meetUpEventPlannerApp')
  .controller('EventAddCtrl', ['event', 'formTracker', 'account', '$timeout',
    function (event, formTracker, account, $timeout) {
      var vm = this;
      vm.completedPercent = 0;
      vm.event = {};
      vm.currentUser = account.getCurrentAccount();

      // set the min day as the current day
      vm.today = new Date();
      console.log(vm.today.getTime());

      formTracker.init(addEventForm);

      vm.suggestEventType = function (q) {
        return event.getTypes(q);
      };

      vm.add = function () {
        event.add(vm.event);
      };
      $timeout(function(){
       document.getElementById("eventName").focus();
      });

    }]);
