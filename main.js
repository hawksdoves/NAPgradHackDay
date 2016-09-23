
var weeklyDailyStatus = [];

var weather = new Weather();

var weatherStatus = [];

var pidArray = [];
var products = [];

getLocation();

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

var WEATHER_RECOMMENDATIONS = {
  "wet": [752748,752747, 705403],
  "warm": [746398, 571849, 379616, 746401, 756324, 691457, 714171, 734229, 736778],
  "mild": [743503, 743508, 734221, 743499, 750928, 750931, 705061, 731847],
  "cold": [755539, 728156, 734223, 643303, 683724, 683724, 742198, 713587, 715078]
}

function getLocation() {
	if (navigator.geolocation) {

	// Get the user's current position
	navigator.geolocation.getCurrentPosition(showPosition, showError);
	} else {
		alert('Geolocation is not supported in your browser');
	}
}

function showPosition(position) {
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

        weeklyClimates(productData.list);
        getPid();
        getProductDetails(pidArray);


function loadImage(elementClass, details){
  var $carouselSlide = $("." + elementClass);
  console.log(elementClass);
  console.log(details.url);
  $carouselSlide.children("img").attr("src", details.imgUrl).wrap('<a href="'+ details.url +'" target="_blank"/>');
  $carouselSlide.children("div.carousel-caption").html("<p>" + details.price + "</p>" + "<p>" + details.name + "</p>");
}

function getProductDetails(pidsArray){
  var url = "http://lad-api.net-a-porter.com:80/NAP/GB/en/60/0/summaries?visibility=visible&pids=" + pidsArray.join("%2C");
  console.log(url);
  var urlTemplate = "https://www.net-a-porter.com/gb/en/product/";
  jQuery.getJSON(url, function(data){
    
    for(let product of data.summaries){
      let productDetail = {};
      productDetail.name = product.name
      productDetail.price = "£" + product.price.amount/100;
      productDetail.brand = product.brandId;
      productDetail.imgUrl = product.images.urlTemplate.replace("{{scheme}}", "http:").replace("{{shot}}", "in").replace("{{size}}", "l");
      productDetail.url = urlTemplate + product.id;
      console.log(productDetail);
      products.push(productDetail);
    }
    loadImage("first", products[0]);
    loadImage("second", products[1]);
    loadImage("third", products[2]);
    loadImage("fourth", products[3]);
    loadImage("fifth", products[4]);
    loadImage("sixth", products[5]);
    loadImage("seventh", products[6]);
  });
}

			});
		}
	)
}

function getPid(){
  for (var i = 0; i < weeklyDailyStatus.length; i++) {
      var currentDay = weeklyDailyStatus[i];
      var weatherStatus = WEATHER_RECOMMENDATIONS[currentDay[1]];
      var wetStatus = WEATHER_RECOMMENDATIONS[currentDay[0]];
      var combinedWeatherRec = [];
      if(typeof wetStatus != 'undefined'){
        combinedWeatherRec = weatherStatus.concat(wetStatus);
      } else {
        combinedWeatherRec = weatherStatus;
      }
      // console.log(combinedWeatherRec);
      var pidIndex = _getRandomNumber(0, combinedWeatherRec.length-1);
      while(pidArray.includes(combinedWeatherRec[pidIndex])){
          pidIndex = _getRandomNumber(0, combinedWeatherRec.length-1); 
      }

      pidArray.push(combinedWeatherRec[pidIndex]);
      // call api with pid
      // return price and image
  }
  //return pidArray;
}

function _getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

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
