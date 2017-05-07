
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 12,
    scrollwheel: false,
    streetViewControl: false,
    mapTypeControl: false,

    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(56.952048, 24.120586), // Riga

    // How you would like to style the map.
    // This is where you would paste any style found on Snazzy Maps.
    styles: [{			"stylers":[			{"hue":"#007fff"},			{"saturation":89}			]		},{			"featureType":"water",			"stylers":[			{"color":"#ffffff"}			]		},{			"featureType":"administrative.country",			"elementType":"labels",			"stylers":[			{"visibility":"off"}			]		}]
  };

  // Get the HTML DOM element that will contain your map
  // We are using a div with id="map" seen below in the <body>
  var mapElement = document.getElementById('map');

  // Create the Google Map using our element and options defined above
  var map = new google.maps.Map(mapElement, mapOptions);

  // Let's also add a marker while we're at it
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(56.952048, 24.120586),
    map: map,
    title: 'Mood Creations',
    icon: "",
  });

// включение скрола после клика на карту
  map.addListener('click', function() {
    map.setOptions({
      scrollwheel: true
    });
  });

// включение скрола после пртягивания
map.addListener('drag', function() {
	map.setOptions({
		scrollwhell: true
	});
});

// отлючение скрола
map.addListener('mouseout', function() {
	map.setOptions({
		scrollwhell: false
	});
});


}
