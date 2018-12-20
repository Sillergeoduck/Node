    const yargs = require('yargs');
    const request = require('request');

    let baseURL = 'https://maps.googleapis.com/maps/api/geocode/json?';
    let key = 'AIzaSyBTkITpLc6zXMHBt4bDZTEWH_dfGW3KWmM';

    const command = yargs.options({
        a:{
                describe: 'Address',
                demand: true,
                alias: 'address',
                string: true
            }
        })
        .help()
        .alias('help','h')
        .argv;

    let encodedAddress = encodeURIComponent(command.a);

    request({
        uri:`${baseURL}address=${encodedAddress}&key=${key}`,
        json: true
        },  (error, body, response) => {
            console.log(body);
        });


