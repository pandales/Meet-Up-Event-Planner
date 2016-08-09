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
    //var currentAccount = {};
    //TODO:
    var currentAccount = $localstorage.getObject("accounts")[0]
    return {
      create: function (accountData) {
        var accounts = $localstorage.getObject("accounts") || [];
        accountData.id = accounts.length;
        accounts.push(accountData);
        $localstorage.setObject('accounts', accounts);
        currentAccount = accountData;
        this.isLogged = true;

        return accountData.id;
      },
      login: function (email) {
        var accounts = $localstorage.getObject("accounts");
        var accountIndex = _.findIndex(accounts, function(o) {
          return o.email == email;
        });

        if (accountIndex >= 0) {
          this.isLogged = true;
          currentAccount = accounts[accountIndex];
        }

      },
      getCurrentAccount: function () {
        // TODO: delete the next line is only for tests
        currentAccount = $localstorage.getObject("accounts")[0];
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

        // TODO: Redirect to event creation with a message to invite the user
        // to create a event
      },
      isLogged: (_.size(currentAccount) > 0)
    }
  }]);
