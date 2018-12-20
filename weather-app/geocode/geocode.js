    const request = require('request');

    let geocodeAddress =  (address, callback) => {
        let encodeAddress = encodeURIComponent(address);
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=AIzaSyBTkITpLc6zXMHBt4bDZTEWH_dfGW3KWmM`,
            json: true
        }, (error, response, body) => {
            if(error) {
                callback('Unable to reach out to google servers :(');
            } else if (body.status === 'ZERO_RESULTS') {
                callback('Address not found');
            } else if (body.status === 'OK') {
                callback(undefined, {
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });

            }
        });
    };

    module.exports = {
        geocodeAddress
    };

    //https://api.darksky.net/forecast/83ba89c3078ff2be3c5a976107cecc70/37.8267,-122.4233