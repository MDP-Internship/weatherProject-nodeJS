var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=izmir,tr&appid=4f1ff31677a82105cdfefdf4fcbdc228&units=metric';
module.exports = function (callback) {
    request({
        url : url,
        json: true,
    }, function(error,response,body){
        if(error){
            callback('hava durumu alınamadı');
        } else{
         return callback(body.main.temp)
        }
    });

}