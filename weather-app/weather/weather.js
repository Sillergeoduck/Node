    const request = require('request');

    let getWeather = (lat, lng, callback) => {
        request({
            url: `https://api.darksky.net/forecast/83ba89c3078ff2be3c5a976107cecc70/${lat},${lng}`,
            json: true
        }, (error, response, body) => {
            /** @namespace body.currently.temperature */
            /** @namespace body.currently */
            if (!error && response.statusCode === 200) {
                /** @namespace body.currently.apparentTemperature */
                callback(undefined, {
                    temperature: body.currently.temperature,
                    actualTemperature: body.currently.apparentTemperature
                });
            } else  {
                callback("unable to fetch the weather forecast !!!!");
            }
        });
    };

    module.exports = {
      getWeather
    };