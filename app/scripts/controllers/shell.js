'use strict';

/**
 * @ngdoc function
 * @name meetUpEventPlannerApp.controller:ShellCtrl
 * @description
 * # ShellCtrl
 * Controller of the meetUpEventPlannerApp
 */
angular.module('meetUpEventPlannerApp')
  .controller('ShellCtrl', ['$scope', '$mdBottomSheet','$mdSidenav', '$mdDialog', 'account',
    function($scope, $mdBottomSheet, $mdSidenav, $mdDialog, account) {
      var ctrl = this;
      ctrl.account = account;
  }]);
