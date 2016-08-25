'use strict';

/**
 * @ngdoc function
 * @name meetUpEventPlannerApp.controller:EventAddCtrl
 * @description
 * # EventAddCtrl
 * Controller of the meetUpEventPlannerApp
 */
angular.module('meetUpEventPlannerApp')
  .controller('EventAddCtrl', ['event', 'account', '$timeout',
    function (event, account, $timeout) {
      var vm = this;
      vm.completedPercent = 0;
      vm.event = {};
      vm.currentUser = account.getCurrentAccount();

      vm.dateToString =  function (date) {
        return date.toISOString().slice(0,17) + "00";
      };

      // set the min day as the current day
      vm.today = new Date();
      vm.minDate = vm.dateToString(vm.today);

      vm.suggestEventType = function () {
        return event.getTypes();
      };

      vm.add = function () {
        event.add(vm.event);
      };
      $timeout(function(){
       document.getElementById("eventName").focus();
      });

    }]);
