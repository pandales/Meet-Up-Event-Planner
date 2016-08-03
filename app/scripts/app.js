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
    'ngMaterialDatePicker',
    'uiGmapgoogle-maps'
  ])
  .config(['$stateProvider', '$urlRouterProvider','uiGmapGoogleMapApiProvider',
    function ($stateProvider, $urlRouterProvider, uiGmapGoogleMapApi) {
      uiGmapGoogleMapApi.configure({
        key: 'AIzaSyBNOwSDWSRjxXf0fc4nYYm1D6BWdSM6PY4',
        libraries: 'weather,geometry,visualization,places'
      });

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
        controllerAs: 'ctrl'
      })

      .state('add-event', {
        'url': '/events/add',
        templateUrl: 'views/event/add.html',
        controller: 'EventAddCtrl',
        controllerAs: 'form'
      })

      .state('view-event', {
        'url': '/events/:id',
        templateUrl: 'views/event/view.html',
        controller: 'EventViewCtrl',
        controllerAs: 'ctrl'
      })

      .state('register-form', {
        'url': '/sign-up',
        templateUrl: 'views/account/register-form.html',
        controller: 'AccountRegisterFormCtrl',
        controllerAs: 'form'
      })
      ;




  }]);
