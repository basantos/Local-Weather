$(document).ready(function(){
  var celsius;
  var fahrenheit;

  $.getJSON("https://ipapi.co/json/", function(data){
    $(".city").html(data.city);
    var weatherURL = "http://api.openweathermap.org/data/2.5/weather?lat=" + data.latitude + "&lon=" + data.longitude + "&appid=497713a7d3c7c4e180e1f429a14e06f1";
    $.getJSON(weatherURL,function(json){
      fahrenheit = 1.8 * (json.main.temp - 273) + 32;
      $(".weather").html(fahrenheit.toFixed(2) + "&deg;F");
      handleData();
      switch(json.weather[0].icon){
        case "01d":
        case "02d":
          $("body").addClass("clearSky");
          break;
        case "01n":
        case "02n":
          $("body").addClass("clearNight");
          break;
        case "03d":
        case "04d":
          $("body").addClass("cloudyDay");
          break;
        case "03n":
        case "O4n":
          $("body").addClass("cloudyNight");
          break;
        case "09d":
        case "09n":
        case "10d":
        case "10n":
          $("body").addClass("rainy");
          break;
        case "11d":
        case "11n":
          $("body").addClass("thunderstorm");
          break;
        case "13d":
          $("body").addClass("snowyDay");
          break;
        case "13n":
          $("body").addClass("snowyNight");
          break;
        case "50d":
        case "50n":
          $("body").addClass("misty");
          break;
      }
      //$(".icon").html("<img src='http://openweathermap.org/img/w/" + json.weather[0].icon + ".png'><img>");
    });
  });

  function handleData(){
    $(".toC").on("click",function(){
      toCelsius();
      $(".toC").html("");
      $(".toF").html("&deg;F");
    });
    $(".toF").on("click",function(){
      toFahrenheit();
      $(".toF").html("");
      $(".toC").html("&deg;C");
    });
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
