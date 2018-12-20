    let ayncAdd =  (a, b) => {
            return new Promise( (resolve, reject) => {
                setTimeout( () => {
                    if (typeof a === "number" && typeof b === "number") {
                        resolve(a+b);
                    } else {
                        reject('Arguments must be numbers');
                    }
                }, 1500)
            })
    };

    ayncAdd(2, '2').then( (res) => {
        console.log('Result:', res);
        return ayncAdd(res, '33');
    }).then( (result) => {
        console.log(result);
    }).catch( (errorMessage) => {
        console.log(errorMessage);
    });
    
    let somePromise = new Promise( (resolve, reject) => {
         setTimeout( () => {
             resolve('Hey the Promise is Resolved');
             reject('Hey the promise was Rejected :(');
         }, 2500);
     });

    somePromise.then( (message) => {
            console.log('success',message);
    }, (errorMessage) => {
        console.log(errorMessage);
    });

