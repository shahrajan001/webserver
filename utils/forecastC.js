
const request = require('request')
const forecast = (longitude,latitude,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3ec801f0906715741a57fa4dba5acdfd&query='+ latitude + ',' + longitude + '&unit=s' 
request({ url, json: true }, (error, {body}) => {
    if(error){
        callback('Cant connect',undefined)         // internet not connected
    }
    else if (body.error){
        callback('Cant find location',undefined)   
    }
    else{
        callback(undefined,{
            Time: body.location.localtime,
            temperature: body.current.temperature,
            weather: body.current.weather_descriptions

        })
    
    }
    })
}
module.exports = forecast