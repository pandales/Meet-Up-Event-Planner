'use strict';

/**
 * @ngdoc function
 * @name meetUpEventPlannerApp.controller:EventViewCtrl
 * @description
 * # EventViewCtrl
 * Controller of the meetUpEventPlannerApp
 */
angular.module('meetUpEventPlannerApp')
  .controller('EventViewCtrl', ['$state', 'event',
    function ($state, event) {
      var ctrl = this;
      ctrl.event = event.get($state.params.id);
    }]);
