'use strict';

/**
 * @ngdoc service
 * @name meetUpEventPlannerApp.event
 * @description
 * # event
 * Service in the meetUpEventPlannerApp.
 */
angular.module('meetUpEventPlannerApp')
  .service('event', ['$localstorage', function ($localstorage) {
    var eventTypes = [
      'birthday party',
      'conference talk',
      'wedding'
    ];

    var events = $localstorage.getObject("events");

    return {
      add: function (eventData) {
        console.log(eventData);

        /*events.push(eventData);
        $localstorage.setObject("events",events);*/

      },
      get : function (eventId) {
        var index = _.findIndex(events, function(o) {
          return o.id == eventId;
        });

        return events[index];
      },
      update: function () {

      },
      getTypes: function (q) {

        return _.filter(eventTypes, function(option){
          if (option.indexOf(q) >= 0) {
            return option;
          }
        });
      }
    }
  }]);