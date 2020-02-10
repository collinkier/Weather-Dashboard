
$('#two').on('click', function() {
 	var cityID = 'Boston,MA,USA';
	processCityID(cityID);
	processCityID3DayForcast(cityID);
 	});

$('#three').on('click', function() {
	var cityID = 'Los Angeles,CA,USA';
	processCityID(cityID);
	processCityID3DayForcast(cityID);
	});

$('#four').on('click', function() {
	var cityID = 'Seattle,WA,USA';
	processCityID(cityID);
	processCityID3DayForcast(cityID);
	});


$('#five').on('click', function() {
	var cityID = 'Chicago,IL,USA';
	processCityID(cityID);
	processCityID3DayForcast(cityID);
	});
			
$('#six').on('click', function() {
	var cityID = 'Detroit,MI,USA';
	processCityID(cityID);
	});

$('#seven').on('click', function() {
	var cityID = 'Saint Louis,USA';
	processCityID(cityID);
	processCityID3DayForcast(cityID);
	});

$('#eight').on('click', function() {
	var cityID = 'Miami,FL,USA';
	processCityID(cityID);
	processCityID3DayForcast(cityID);
	});
	
$('#nine').on('click', function() {
	var cityID = 'Lincoln,NE,USA';
	processCityID(cityID);
	processCityID3DayForcast(cityID);
	});

	function processCityID(cityName){
	var fetchString = 'https://api.openweathermap.org/data/2.5/weather?q=';
	var key = '&APPID=46aae4e318cb70fcc58425813d46824f';
	var finalKey = fetchString + cityName + key
	fetch(finalKey)
	.then(function(resp) { return resp.json() }) // Convert data to json
	.then(function(data) {
		formatWeather(data); // Call formatWeather() to do conversions and display the data
		})
}  //end processCityID function

function processCityID3DayForcast(cityName){

	var fetchString2 = 'https://api.openweathermap.org/data/2.5/forecast?q=';
	var key2 = '&mode=json&APPID=46aae4e318cb70fcc58425813d46824f';
	var finalKey2 = fetchString2 + cityName + key2;
	fetch(finalKey2)
	.then(function(resp) { return resp.json() }) // Convert data to json
	.then(function(data) {
		formatWeather3Day(data); // Call formatWeather3Day() to do conversions and display the data
		})

}  //end processCityID3DayForcast function


function formatWeather(d) {
	//var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	// var fahrenheit = fahrenheit + '&deg;';
	fahrenheit = fahrenheit + ' Degrees F';
	var description = d.weather[0].description; 
	var humidity = d.main.humidity;
	var wind = d.wind.speed;
	wind = wind*2.23693629  ///converts wind from meters per second to MPH
	wind = wind.toFixed(1);
	var location = d.name;
	location = location + ":  " + description;

	$('h3').text(location);
	$('#Temp').text("Temperature: " + fahrenheit);
	$('#Humidity').text("Humidity: " + humidity);
	$('#Wind').text("Wind speed: " + wind + " MPH");
}

function formatWeather3Day(d) {
	var forcastdesc0 = d.list[8].weather[0].description;
	var forcastdesc1 = d.list[16].weather[0].description;
	var forcastdesc2 = d.list[24].weather[0].description;


	var forcasttemp0 = d.list[8].main.temp;
	var forcasttemp1 = d.list[16].main.temp;
	var forcasttemp2 = d.list[24].main.temp;
	
	var fahrenheit0 = Math.round(((parseFloat(forcasttemp0)-273.15)*1.8)+32); 
	var fahrenheit1 = Math.round(((parseFloat(forcasttemp1)-273.15)*1.8)+32); 
	var fahrenheit2 = Math.round(((parseFloat(forcasttemp2)-273.15)*1.8)+32); 


	fahrenheit0 = fahrenheit0 + ' Degrees F';
	fahrenheit1 = fahrenheit1 + ' Degrees F';
	fahrenheit2 = fahrenheit2 + ' Degrees F';
	
	var forcasthumidity0 = d.list[8].main.humidity;
	var forcasthumidity1 = d.list[16].main.humidity;
	var forcasthumidity2 = d.list[24].main.humidity;

	var forcastdate0 = d.list[8].dt_txt;
	var forcastdate1 = d.list[16].dt_txt;
	var forcastdate2 = d.list[24].dt_txt;


	$('#date0').text(forcastdate0);
	$('#date1').text(forcastdate1);
	$('#date2').text(forcastdate2);

	$('#temp0').text("Temp: " + fahrenheit0);
	$('#temp1').text("Temp: " + fahrenheit1);
	$('#temp2').text("Temp: " + fahrenheit2);

	$('#humidity0').text("Humidity: " + forcasthumidity0);
	$('#humidity1').text("Humidity: " + forcasthumidity1);
	$('#humidity2').text("Humidity: " + forcasthumidity2);

	$('#clouds0').text(forcastdesc0);
	$('#clouds1').text(forcastdesc1);
	$('#clouds2').text(forcastdesc2);

}

 