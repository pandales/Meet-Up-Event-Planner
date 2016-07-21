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
    var self = this;
    var currentAccount = {};
    return {
      create: function (accountData) {
        var accounts = $localstorage.getObject("accounts") || [];
        accountData.id = accounts.length;
        accounts.push(accountData);
        $localstorage.setObject('accounts', accounts);
        currentAccount = accountData;
        self.isLogged = true;

        return accountData.id;
      },
      login: function (email) {
        var accounts = $localstorage.getObject("accounts");
        var accountIndex = _.findIndex(accounts, function(o) {
          return o.email == email;
        });

        if (accountIndex >= 0) {
          self.isLogged = true;
          currentAccount = accounts[accountIndex];
        }

      },
      getCurrentAccount: function () {
        return currentAccount;
      },
      updateAccount: function () {
        var accounts = $localstorage.getObject("accounts");
        var currentAccountReference = this.getCurrentAccount();
        var accountIndex = _.findIndex(accounts, function(o) {
          return o.id == currentAccountReference.id;
        });
        accounts[accountIndex] = currentAccountReference;
        $localstorage.setObject('accounts', accounts);
      }
    }
  }]);
