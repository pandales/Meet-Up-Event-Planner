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
  	var id = 1;
    return {
      create: function (account) {
        console.log(account);
      },
      login: function (userInfo) {

      },
      get: function (id) {

      }

    }
  });
