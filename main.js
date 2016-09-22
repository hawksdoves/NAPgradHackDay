//_getWeatherData(35, 139);
getLocation();

function getLocation() {
	if (navigator.geolocation) {
					
	// Get the user's current position
	navigator.geolocation.getCurrentPosition(showPosition, showError);
	} else {
		alert('Geolocation is not supported in your browser');
	}
}

function showPosition(position) {
	//alert('Latitude: '+position.coords.latitude+'Longitude: '+position.coords.longitude);
	_getWeatherData(position.coords.latitude, position.coords.longitude);
}

function showError(error) {
	switch(error.code) {
		case error.PERMISSION_DENIED:
			alert("User denied the request for Geolocation.");
			break;
		case error.POSITION_UNAVAILABLE:
			alert("Location information is unavailable.");
			break;
		case error.TIMEOUT:
			alert("The request to get user location timed out.");
			break;
		case error.UNKNOWN_ERROR:
			alert("An unknown error occurred.");
			break;
	}
}
	
function _getWeatherData(lat, lon){
		fetch('http://api.openweathermap.org/data/2.5/forecast/city?lat=' + lat + '&lon=' + lon + '&APPID=73d75b47f73a3e213e08d898e79c7c2d&cnt=7&units=metric').then(
		function(productResponse){
			productResponse.json().then(function(productData){
				//console.log(productData.list);					
				//console.log(productData);	
				weeklyDailyStatus = productData.list;				
			});
		}
	)	
}