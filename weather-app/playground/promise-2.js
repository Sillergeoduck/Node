          const request = require('request');
          let geocodeAddress = (address) => {
            return new Promise( (resolve, reject) => {
                let encodeAddress = encodeURIComponent(address);
                request({
                    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=AIzaSyBTkITpLc6zXMHBt4bDZTEWH_dfGW3KWmM`,
                    json: true
                }, (error, response, body) => {
                    if(error) {
                        reject('Unable to reach out to google servers :(');
                    } else if (body.status === 'ZERO_RESULTS') {
                        reject('Address not found');
                    } else if (body.status === 'OK') {
                        resolve({
                            address: body.results[0].formatted_address,
                            latitude: body.results[0].geometry.location.lat,
                            longitude: body.results[0].geometry.location.lng
                        });

                    }
                });
            })
          };

            geocodeAddress('560092').then( (location) => {
                console.log(location);
            }, (errorMessage) => {
                console.log(errorMessage);
            });