'use strict';

/**
 * @ngdoc service
 * @name meetUpEventPlannerApp.geoLocation
 * @description
 * # geoLocation
 * Service in the meetUpEventPlannerApp.
 */
 angular.module('meetUpEventPlannerApp')
 .service('geoLocation', function () {

 	// Google Example: https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-addressform
 	var isThereGeoLocationApi = false;
 	var initialPosition = false;

 	var placeSearch, autocomplete;
 	var componentForm = {
 		street_number: 'short_name',
 		route: 'long_name',
 		locality: 'long_name',
 		administrative_area_level_1: 'short_name',
 		country: 'long_name',
 		postal_code: 'short_name'
 	};
 	/** @type {!HTMLInputElement} */
 	function initAutocomplete(element, model) {
	  // Create the autocomplete object, restricting the search to geographical
	  // location types.
	  autocomplete = new google.maps.places.Autocomplete(element,
	  	{types: ['geocode']});

	  // When the user selects an address from the dropdown, populate the address
	  // fields in the form.
	  autocomplete.addListener('place_changed', fillInAddress);
	}

// [START region_fillform]

function fillInAddress(model) {
	console.log(model);
  // Get the place details from the autocomplete object.
  var place = autocomplete.getPlace();
  console.log(place.address_components);

  /*for (var component in componentForm) {
  	document.getElementById(component).value = '';
  	document.getElementById(component).disabled = false;
  }*/

  // Get each component of the address from the place details
  // and fill the corresponding field on the form.
  var addressObject = {};
  for (var i = 0; i < place.address_components.length; i++) {
  	var addressType = place.address_components[i].types[0];
  	if (componentForm[addressType]) {
  		var val = place.address_components[i][componentForm[addressType]];
  		//document.getElementById(addressType).value = val;
  		addressObject[addressType] = val;
  		console.log(addressObject);
  	}
  }
}
// [END region_fillform]


	// [START region_geolocation]
	// Bias the autocomplete object to the user's geographical location,
	// as supplied by the browser's 'navigator.geolocation' object.
	function geolocate() {
		if (navigator.geolocation) {
			isThereGeoLocationApi = true;
			navigator.geolocation.getCurrentPosition(function(position) {
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

	return {
		isThereGeoLocationApi: function () {
			return isThereGeoLocationApi;
		},
		getCurrentPosition: function (success, error) {
			navigator.geolocation.getCurrentPosition(success, error);
		},
		geolocate: geolocate,
		initAutocomplete: initAutocomplete

	}


});
