_getWeatherData(35, 139);

var weeklyDailyStatus = [];
function _getWeatherData(lat, lon){
		fetch('http://api.openweathermap.org/data/2.5/forecast/city?lat=' + lat + '&lon=' + lon + '&APPID=73d75b47f73a3e213e08d898e79c7c2d&cnt=7').then(
		function(productResponse){
			productResponse.json().then(function(productData){
        weeklyClimates(productData.list);
			});
		}
	)
}

function Weather(){
  this.WEATHERTYPES = {
    "Shower rain": "wet",
    "Rain": "wet",
    "Thunderstorm": "wet",
    "Snow": "wet"
  };
  this.COLD_THRESHOLD = 12;
  this.MILD_THRESHOLD = 20;
}

var weather = new Weather();


var weatherStatus = [];

function weeklyClimates(weeklyWeatherArr) {
  var arrayLength = weeklyWeatherArr.length;
  for (var i = 0; i < arrayLength; i++) {
  weeklyDailyStatus.push(getDailyClimates(weeklyWeatherArr[i]));
  weatherStatus = [];
  }
}

function getDailyClimates(dailyWeatherStats) {
  findWeatherType(dailyWeatherStats.weather[0].main);
  findClimateType(dailyWeatherStats.main.temp);
  return weatherStatus;
}

function findWeatherType(weatherDescription) {
  return weatherStatus.push(weather.WEATHERTYPES[weatherDescription]);
}

function findClimateType(avTemp) {
  if (avTemp <= weather.COLD_THRESHOLD){
    weatherStatus.push("cold");
  } else if (avTemp > weather.COLD_THRESHOLD && avTemp <= weather.MILD_THRESHOLD) {
    weatherStatus.push("mild");
  } else
  weatherStatus.push("warm");
}
