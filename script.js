
$('#two').on('click', function() {
 	var cityID = 'Boston,MA,USA';
 	processCityID(cityID);
 	});

$('#three').on('click', function() {
var cityID = 'Los Angeles,CA,USA';
processCityID(cityID);
});

$('#four').on('click', function() {
	var cityID = 'Seattle,WA,USA';
	processCityID(cityID);
	});

$('#five').on('click', function() {
	var cityID = 'Chicago,IL,USA';
	processCityID(cityID);
	});
			
$('#six').on('click', function() {
	var cityID = 'Detroit,MI,USA';
	processCityID(cityID);
	});

$('#seven').on('click', function() {
	var cityID = 'Saint Louis,USA';
	processCityID(cityID);
	});

$('#eight').on('click', function() {
	var cityID = 'Miami,FL,USA';
	processCityID(cityID);
	});
	
$('#nine').on('click', function() {
	var cityID = 'Lincoln,NE,USA';
	processCityID(cityID);
	});

	function processCityID(cityName){
	//alert("test that city Id passed to a function as cityName " + cityName);
	var fetchString = 'https://api.openweathermap.org/data/2.5/weather?q=';
	var key = '&APPID=46aae4e318cb70fcc58425813d46824f';
	var finalKey = fetchString + cityName + key
	fetch(finalKey)
	.then(function(resp) { return resp.json() }) // Convert data to json
	.then(function(data) {
		formatWeather(data); // Call formatWeather() to convert from Kelvin to degrees and display where needed
		})
}  //end processCityID function

function formatWeather(d) {
	//var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	// var fahrenheit = fahrenheit + '&deg;';
	fahrenheit = fahrenheit + ' Degrees F';
	var description = d.weather[0].description; 
	var humidity = d.main.humidity;
	var wind = d.wind.speed;
	//wind = wind*2.23693629  ///converts wind from meters per second to MPH
	wind = wind.toFixed(1);
	var location = d.name;
	location = location + ":  " + description;

	$('h3').text(location);
	$('#Temp').text("Temperature: " + fahrenheit);
	$('#Humidity').text("Humidity: " + humidity);
	$('#Wind').text("Wind speed: " + wind + " MPH");
}
	