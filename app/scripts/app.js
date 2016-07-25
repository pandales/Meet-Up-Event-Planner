'use strict';

/**
 * @ngdoc overview
 * @name meetUpEventPlannerApp
 * @description
 * # meetUpEventPlannerApp
 *
 * Main module of the application.
 */
angular
  .module('meetUpEventPlannerApp', [
    'ui.router',
    'ngMaterial',
    'ngMessages',
    'ngMaterialDatePicker'
  ])
  .config(['$stateProvider', '$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('home', {
        'url': '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })

      .state('events-list', {
        'url': '/events',
        templateUrl: 'views/event/index.html',
        controller: 'EventIndexCtrl',
        controllerAs: 'form'
      })

      .state('add-event', {
        'url': '/events/add',
        templateUrl: 'views/event/add.html',
        controller: 'EventAddCtrl',
        controllerAs: 'form'
      })

      .state('register-form', {
        'url': '/sign-up',
        templateUrl: 'views/account/register-form.html',
        controller: 'AccountRegisterFormCtrl',
        controllerAs: 'form'
      })

      ;
  }]);
