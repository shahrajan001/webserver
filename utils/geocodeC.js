const request = require('request')
const geocode = (location,callback) => {
    const geourl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + location + '.json?access_token=pk.eyJ1Ijoic2hhaHJhamFuMDAxIiwiYSI6ImNrejJpbTV4cDAxMTAydm16YndpZDEzZmgifQ.N1xDdpR-Sr4L67WS4tjwNw'
request({ url: geourl, json: true }, (error, {body}) => {
    if(error){
        callback('Cant connect',undefined)         // internet not connected
    }
    else if (body.features.length == [] ){
        callback('Cant find location',undefined)   // geourl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/21839213.json?access_token=pk.eyJ1Ijoic2hhaHJhamFuMDAxIiwiYSI6ImNrejJpbTV4cDAxMTAydm16YndpZDEzZmgifQ.N1xDdpR-Sr4L67WS4tjwNw'
    }
    else{
        callback(undefined,{
            geometry: body.features[0].geometry.type,
            latitude: body.features[0].center[1],
            longitude: body.features[0].center[0]
        }
        )}
    })
}
module.exports = geocode