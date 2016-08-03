'use strict';

/**
 * @ngdoc function
 * @name meetUpEventPlannerApp.controller:EventIndexCtrl
 * @description
 * # EventIndexCtrl
 * Controller of the meetUpEventPlannerApp
 */
angular.module('meetUpEventPlannerApp')
  .controller('EventIndexCtrl', ['event', function (event) {
    var ctrl = this;
    ctrl.events = event.getAll();
  }]);
