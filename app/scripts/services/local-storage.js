'use strict';

/**
 * @ngdoc service
 * @name meetUpEventPlannerApp.$localStorage
 * @description
 * # $localStorage
 * Service in the meetUpEventPlannerApp.
 */
angular.module('meetUpEventPlannerApp')
  .factory('$localstorage', ['$window', function ($window) {
    return {
      set: function (key, value) {
        $window.localStorage[key] = value;
      },
      get: function (key, defaultValue) {
        return $window.localStorage[key] || defaultValue;
      },
      setObject: function (key, value) {
        $window.localStorage[key] = JSON.stringify(value);
      },
      getObject: function (key) {
        return JSON.parse($window.localStorage[key] || false);
      },
      clear: function () {
        $window.localStorage.clear();
      }
    }
  }]);
