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

function Weather(){
  this.WEATHERTYPES = {
    "shower rain": "wet",
    "rain": "wet",
    "thunderstorm": "wet",
    "snow": "wet"
  };
  this.COLD_THRESHOLD = 12;
  this.MILD_THRESHOLD = 20;
}


var WEATHERTYPES = {
  "shower rain": "wet",
  "rain": "wet",
  "thunderstorm": "wet",
  "snow": "wet"
}

new Weather();
// cold: [12],
// mild: [12,20],
// warm: [20],
//
// var TEMPTYPES =
