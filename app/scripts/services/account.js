'use strict';

/**
 * @ngdoc service
 * @name meetUpEventPlannerApp.account
 * @description
 * # account
 * Service in the meetUpEventPlannerApp.
 */
angular.module('meetUpEventPlannerApp')
  .service('account', function () {
    return {
      create: function (account) {
        console.log(account);
      },
      login: function (userInfo) {

      }

    }
  });
