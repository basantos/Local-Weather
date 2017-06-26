$(document).ready(function(){
  var celsius;
  var fahrenheit;

  $.getJSON("https://ipapi.co/json/", function(data){
    var weatherURL = "http://api.openweathermap.org/data/2.5/weather?lat=" + data.latitude + "&lon=" + data.longitude + "&appid=497713a7d3c7c4e180e1f429a14e06f1";
    $.getJSON(weatherURL,function(json){
      fahrenheit = 1.8 * (json.main.temp - 273) + 32;
      $(".weather").html(fahrenheit.toFixed(2) + "&deg;F");
      handleData();
    });
  });

  function handleData(){
    $(".toC").on("click",toCelsius);
    $(".toF").on("click",toFahrenheit);
  }

  function toCelsius(){
    celsius = (fahrenheit-32)/1.8;
    $(".weather").html(celsius.toFixed(2) + "&deg;C");
  }

  function toFahrenheit(){
    fahrenheit = celsius*1.8 + 32;
    $(".weather").html(fahrenheit.toFixed(2) + "&deg;F")
  }

});

/*function getWeather(){
  $.getJSON("https://ipapi.co/json/", function(data){
    var weatherURL = "http://api.openweathermap.org/data/2.5/weather?lat=" + data.latitude + "&lon=" + data.longitude + "&appid=497713a7d3c7c4e180e1f429a14e06f1";
    $.getJSON(weatherURL,function(json){
      fahrenheit = 1.8 * (json.main.temp - 273) + 32;
    });
  });
  return fahrenheit;
}

$("#weather").html(getWeather() + "&deg;F");*/

/*$(".toC").on("click", function toCelsius(fahrenheit){
  var celsius = (fahrenheit-32)/1.8;
  $("#weather").html(celsius.toFixed(2) + "&deg;C");
});

$(".toF").on("click", function toFahrenheit(celsius){
  fahrenheit = celsius*1.8 + 32;
  $("#weather").html(fahrenheit.toFixed(2) + "&deg;F")
});*/

/*function toCelsius(fahrenheit){
  var celsius = (fahrenheit-32)/1.8;
  return celsius.toFixed(2) + "&deg;C";
}
function toFahrenheit(celsius){
  fahrenheit = celsius*1.8 + 32;
  return fahrenheit.toFixed(2) + "&deg;F";
}*/

     // $("#weather").html("https://api.darksky.net/forecast/84ee0932439da382104c64c826ccf262/" + position.coords.latitude + "," + position.coords.longitude);
    /*$.getJSON("https://api.darksky.net/forecast/84ee0932439da382104c64c826ccf262/" + position.coords.latitude + "," + position.coords.longitude, function(json){
      var keys = Object.keys(val);
      $("#weather").html(JSON.stringify(json));
    });
  });*/

    /*$.ajax({
      url: "api.openweathermap.org/data/2.5/weather",
      method: "GET",
      data: { lat: String(position.coords.latitude), lon: String(position.coords.longitude), appid: "497713a7d3c7c4e180e1f429a14e06f1" },
      success: function(response){
        var dataArray = JSON.parse(response);
        $("#weather").html(dataArray);
      }
    });*/
