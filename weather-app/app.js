    const yargs = require('yargs');
    const geocode = require('./geocode/geocode.js');
    const weather = require('./weather/weather');

    const argv = yargs
        .options({
            a: {
                describe: 'Address to fetch geocode for',
                demand: true,
                alias: 'address',
                string: true
            }
    })
        .help()
        .alias('help', 'h')
    .argv;

    geocode.geocodeAddress(argv.a, (errorMessage, results) => {
        if(errorMessage) {
            console.log(errorMessage);
        } else {
            console.log(results.address);
            weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
                if (errorMessage) {
                    console.log(errorMessage)
                } else {
                    console.log(`Its currently ${weatherResults.temperature}. It feels like ${weatherResults.actualTemperature}.`);
                }
            });
        }
    });



