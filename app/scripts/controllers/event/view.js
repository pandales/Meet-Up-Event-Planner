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
      ctrl.map = {center: {latitude: 51.219053, longitude: 4.404418 }, zoom: 14 };
      ctrl.options = {scrollwheel: false};
    }]);
