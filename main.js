_getWeatherData(35, 139);

function _getWeatherData(lat, lon){
		fetch('http://api.openweathermap.org/data/2.5/forecast/city?lat=' + lat + '&lon=' + lon + '&APPID=73d75b47f73a3e213e08d898e79c7c2d&cnt=7').then(
		function(productResponse){
			productResponse.json().then(function(productData){
				console.log(productData.list);					
			});
		}
	)	
}