'use strict';

/**
 * @ngdoc service
 * @name meetUpEventPlannerApp.account
 * @description
 * # account
 * Service in the meetUpEventPlannerApp.
 */
angular.module('meetUpEventPlannerApp')
  .service('account',['$localstorage', function ($localstorage) {
  	this.currentAccount = {};
    return {
      create: function (account) {
        var accounts = $localstorage.get("account", []);
        accounts.push(account);
        $localstorage.set('accounts', accounts);
        this.currentAccount = account;
      },
      login: function (userInfo) {

      },
      getCurrentAccount: function (id) {

      }
    }
  }]);
