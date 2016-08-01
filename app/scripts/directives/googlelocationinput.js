'use strict';

/**
 * @ngdoc directive
 * @name meetUpEventPlannerApp.directive:googleLocationInput
 * @description
 * # googleLocationInput
 */
angular.module('meetUpEventPlannerApp')
  .directive('googleLocationInput', function () {
    // Shared variables
    var placeSearch, autocomplete;
    var componentForm = {
      street_number: 'short_name',
      route: 'long_name',
      locality: 'long_name',
      administrative_area_level_1: 'short_name',
      country: 'long_name',
      postal_code: 'short_name'
    };

    return {
      templateUrl: 'scripts/directives/googlelocationinput.html',
      restrict: 'E',
      scope: {
        ngModel: "=",
        ngKeyup: "@",
        id: "@",
        placeholder: "@",
        required: "@",
        name: "@",
        label: "@"
      },
      link: function postLink(scope, element, attrs) {
        var htmlElement = element[0].querySelector("input");

        // When the user selects an address from the dropdown, populate the address
        // fields in the form.
        autocomplete = new google.maps.places.Autocomplete(htmlElement,
          {types: ['geocode']});

        autocomplete.addListener('place_changed', fillInAddress.bind("", scope, htmlElement));
        htmlElement.addEventListener('keyup', function (e) {
          if (e.keyCode != "32"  && typeof scope.ngModel != 'undefined' &&
            typeof scope.ngModel.location != 'undefined') {
            scope.ngModel.location = null;
          }
        });
      }
    };

    // Support function

    // [START region_fillform]

    function fillInAddress(scope, htmlElement) {
      scope.ngModel.text = htmlElement.value;
      htmlElement.focus();

      var addressObject = {};

      // Get the place details from the autocomplete object.
      var place = autocomplete.getPlace();

      // Get each component of the address from the place details
      // and fill the corresponding field on the form.
      for (var i = 0; i < place.address_components.length; i++) {
        var addressType = place.address_components[i].types[0];
        if (componentForm[addressType]) {
          var val = place.address_components[i][componentForm[addressType]];
          addressObject[addressType] = val;
        }
      }

      scope.ngModel.location = addressObject;
      scope.ngModel.location.center = {
        latitude: place.geometry.location.lat(),
        longitude: place.geometry.location.lng()
      };
    }

// [END region_fillform]

    // [START region_geolocation]
    // Bias the autocomplete object to the user's geographical location,
    // as supplied by the browser's 'navigator.geolocation' object.
    function geolocate() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          var geolocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          var circle = new google.maps.Circle({
            center: geolocation,
            radius: position.coords.accuracy
          });
          autocomplete.setBounds(circle.getBounds());
        });
      }
    }
    // [END region_geolocation]
  });
