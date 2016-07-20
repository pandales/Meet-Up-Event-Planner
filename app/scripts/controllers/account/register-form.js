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
    vm.registered = false;

    vm.createAccount = function () {
      console.log(accountForm);
      //account.create(vm.account);
      //vm.registered = true;
    };

    vm.saveData = function () {


    };

    formTracker.init(accountForm);

    vm.track = function (form) {
      vm.completedPercent = formTracker.getPercent(form);
    };

    vm.passwordValidation = function () {
      return false;
    };
  }]);
