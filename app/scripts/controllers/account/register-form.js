'use strict';

/**
 * @ngdoc function
 * @name meetUpEventPlannerApp.controller:AccountRegisterFormCtrl
 * @description
 * # AccountRegisterFormCtrl
 * Controller of the meetUpEventPlannerApp
 */
angular.module('meetUpEventPlannerApp')
  .controller('AccountRegisterFormCtrl', ['account',
    function (account) {
      var vm = this;
      vm.completedPercent = 0;
      vm.account = {};
      vm.registered = false;
      vm.accountId = false;

      vm.createAccount = function () {
        account.create(vm.account);

        // Show the optional info form after the user creation.
        vm.registered = true;
      };

      vm.updateAccount = function () {
        account.updateAccount();
      };

      vm.passwordValidation = function () {
        return false;
      };
    }]);
