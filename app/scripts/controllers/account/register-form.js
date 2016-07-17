'use strict';

/**
 * @ngdoc function
 * @name meetUpEventPlannerApp.controller:AccountRegisterFormCtrl
 * @description
 * # AccountRegisterFormCtrl
 * Controller of the meetUpEventPlannerApp
 */
angular.module('meetUpEventPlannerApp')
  .controller('AccountRegisterFormCtrl', ['account','formTracker', function (account, formTracker) {
    var vm = this;
    vm.completedPercent = 0;
    vm.account = {};

    vm.createAccount = function () {
      account.create(vm.account);
    };

    formTracker.init(accountForm);

    vm.track = function (form) {

      vm.completedPercent = formTracker.getPercent(form);
    }
  }]);
