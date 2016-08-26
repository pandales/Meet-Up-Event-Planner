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

      var fillZero = function (check) {

        if (String(check).length == 1) {
         return "0"+check;
        } else {
          return check;
        }
      };

      vm.dateToString =  function (date, extraHours) {

        if (typeof extraHours !== 'undefined') {
          var dateTime = date.getTime();
          date.setTime(dateTime + extraHours * 60 * 60 * 1000);
        }
        console.log(date);
        //return date.toISOString().slice(0,17) + "00";
        var year = date.getFullYear();
        var month = fillZero(date.getMonth() +  1);
        var day = fillZero(date.getDate());
        var hours = fillZero(date.getHours());
        var minutes = fillZero(date.getMinutes());
        var seconds = "00";

        return year + "-" + month + "-" + day + "T" +
          hours + ":" + minutes + ":" + seconds;

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
