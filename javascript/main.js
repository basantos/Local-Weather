$(document).ready(function(){
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
      var weatherURL = "http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&appid=497713a7d3c7c4e180e1f429a14e06f1";
      $.getJSON(weatherURL,function(json){
        var kelvins = json.main.temp;
        var fahrenheit = 1.8 * (kelvins - 273) + 32;
        $("#weather").html(fahrenheit.toFixed(2)+ "&deg;F");
      });
    });
  }
});


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
