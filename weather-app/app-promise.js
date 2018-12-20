    const yargs = require('yargs');
    const axios = require('axios');
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

    let encodeAddress = encodeURIComponent(argv.a);
    let geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=AIzaSyBTkITpLc6zXMHBt4bDZTEWH_dfGW3KWmM`;

    axios.get(geocodeURL).then( (response) => {
        if (response.data.status === 'ZERO_RESULTS') {
            throw new Error ('Unable to find that Address');
        }
        let lat = response.data.results[0].geometry.location.lat;
        let lng = response.data.results[0].geometry.location.lng;
        let weatherURL = `https://api.darksky.net/forecast/83ba89c3078ff2be3c5a976107cecc70/${lat},${lng}`;
        console.log(response.data.results[0].formatted_address);
        return axios.get(weatherURL);
    }).then( (response) => {
           let temperature = response.data.currently.temperature;
           let  actualTemperature = response.data.currently.apparentTemperature;
           console.log(`Its currently ${temperature}. It feels like ${actualTemperature}.`);
    }).catch( (e) => {
        if (e.code === 'ENOTFOUND') {
            console.log('Unable to connect to API servers !!!');
        } else {
            console.log(e.message);
        }
    });
