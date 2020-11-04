
var weather = require('./example_callback')
var location = require('./location')

 var result = weather(function (currentWeather){
     return currentWeather;
 });



location(function (location) {
    if (!location) {
        
    } else {
        console.log(location.city + ' şehirinde sıcaklık ' );
    }
})

// request modülü içindeki işlemler
/*  */

