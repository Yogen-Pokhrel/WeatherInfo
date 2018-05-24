//var apiCall='http://api.openweathermap.org/data/2.5/weather?q=bangalore&APPID=68b1d76abc920064128961d8cd36ffdf';



function getWhether(){
	var apiCall='https://api.thingspeak.com/channels/489611/feeds.json?results=1';






$.getJSON(apiCall,weatherCallBack);


function weatherCallBack(weatherData){
	var lat= weatherData.feeds[0].field1;
	var lng= weatherData.feeds[0].field2;
	console.log(lat);
	console.log(lng);

}
GetLocation();
}


function getWhether1(name){
	if(name=="desktop")
	{
		var place= $('#place').val();
		 address = document.getElementById("place").value;
		 value=1;
	}
	else
	{
		var place= $('#place1').val();
		 address = document.getElementById("place1").value;
		 value=0;
		 console.log("Tha value is"+ value);
	}
	
	var apiCall='http://api.openweathermap.org/data/2.5/weather?q='+place+'&APPID=68b1d76abc920064128961d8cd36ffdf';



console.log("xiryo");

GetLocation();

console.log("xirena");
$.getJSON(apiCall,weatherCallBack);


function weatherCallBack(weatherData){
	var cityName= weatherData.name;
	var country=weatherData.sys.country;
	var description= weatherData.weather[0].description;
	var humidity=weatherData.main.humidity;
	var wind=weatherData.wind.speed;
	$('.weatherResponse1').empty();
	$('.weatherResponse1').append("PlaceName: "+cityName);
	$('.weatherResponse1').append("<br/>Humidity: "+humidity);
	$('.weatherResponse1').append("<br/>Wind Velocity: "+ wind);
	$('.weatherResponse1').append("<br/>weather: "+description);
	if(description=="broken clouds")
	{
		$('.weatherResponse1').append("<br/><img src='images/cloudy.png' alt='image' style='height:50px; width 50px'/>");
	}
	else if(description=="scattered clouds")
	{
		$('.weatherResponse1').append("<br/><img src='images/scatter1.png' alt='image' style='height:50px; width 50px'/>");
	}
	else if(description=="light rain")
	{
		$('.weatherResponse1').append("<br/><img src='images/light.png' alt='image' style='height:50px; width 50px'/>");
	}
	else if(description=="few clouds")
	{
		$('.weatherResponse1').append("<br/><img src='images/cloud1.png' alt='image' style='height:50px; width 50px'/>");
	}
	else if(description=="sunny")
	{
		$('.weatherResponse1').append("<br/><img src='images/sunny.png' alt='image' style='height:50px; width 50px'/>");
	}
	else{
		$('.weatherResponse1').append("<br/><img src='images/sun.png' alt='image' style='height:50px; width 50px'/>");
	}
}
}





//broken clouds
//light rain
//few clouds
