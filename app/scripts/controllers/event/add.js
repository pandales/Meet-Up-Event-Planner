'use strict';

/**
 * @ngdoc function
 * @name meetUpEventPlannerApp.controller:EventAddCtrl
 * @description
 * # EventAddCtrl
 * Controller of the meetUpEventPlannerApp
 */
angular.module('meetUpEventPlannerApp')
  .controller('EventAddCtrl', function () {
    var vm = this;
    vm.sugestionForTypeEvent = [
    	'birthday party',
    	'conference talk',
    	'wedding'
    ];

    vm.suggestEventType = function (q) {
    	return vm.sugestionForTypeEvent;
    }
  });
