$(document).ready(function(){
  var celsius;
  var fahrenheit;

  $.getJSON("https://ipapi.co/json/", function(data){
    $(".city").html(data.city);
    var weatherURL = "https://api.apixu.com/v1/current.json?key=92295dd90554405cacd181238170210&q=" + data.latitude + "," + data.longitude;
    $.getJSON(weatherURL,function(json){
      fahrenheit = json.current.temp_f.toFixed(2);
      $(".weather").html(fahrenheit + "&deg;F");
      handleData();
      switch(json.current.condition.text){
        case "Sunny":
          $("body").addClass("clearSky");
          break;
        case "Clear":
          $("body").addClass("clearNight");
          break;
        case "Partly cloudy":
        case "Cloudy":
        case "Overcast":
          if(json.current.is_day === 1){
            $("body").addClass("cloudyDay");
          } else {
            $("body").addClass("cloudyNight");
          }
          break;
        case "Patchy rain possible":
        case "Light drizzle":
        case "Thundery":
        case "Patchy sleet possible":
        case "Patchy freezing drizzle possible":
        case "Thundery outbreaks possible":
        case "Patchy light drizzle":
        case "Light drizzle":
        case "Freezing drizzle":
        case "Heavy freezing drizzle":
        case "Patchy light rain":
        case "Light rain":
        case "Moderate rain at times":
        case "Moderate rain":
        case "Heavy rain at times":
        case "Heavy rain":
        case "Light freezing rain":
        case "Moderate or heavy freezing rain":
        case "Light sleet":
        case "Moderate or heavy sleet":
        case "Light rain shower":
        case "Moderate or heavy rain shower":
        case "Torrential rain shower":
        case "Light sleet showers":
        case "Moderate or heavy sleet showers":
        case "Moderate snow":
        case "Moderate snow":
          $("body").addClass("rainy");
          break;
        case "Patchy light rain with thunder":
        case "Moderate or heavy rain with thunder":
        case "Patchy light snow with thunder":
          $("body").addClass("thunderstorm");
          break;
        case "Patchy light snow":
        case "Light snow":
        case "Patchy moderate snow":
        case "Moderate snow":
        case "Patchy heavy snow":
        case "Heavy snow":
        case "Ice pellets":
        case "Moderate snow":
        case "Light snow showers":
        case "Moderate or heavy snow showers":
        case "Light showers of ice pellets":
        case "Moderate or heavy showers of ice pellets":
        case "Light showers of ice pellets":
        case "Light showers of ice pellets":
          if(json.current.is_day === 1){
            $("body").addClass("snowyDay");
          } else {
            $("body").addClass("snowyNight");
          }
          $("body").addClass("snowyDay");
          break;
        case "Blizzard":
        case "Blowing snow":
        case "Moderate or heavy snow with thunder":
          $("body").addClass("snowyNight");
          break;
        case "Mist":
        case "Fog":
        case "Freezing fog":
          $("body").addClass("misty");
          break;
      }
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
