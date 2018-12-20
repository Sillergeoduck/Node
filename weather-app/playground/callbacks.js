    let getUser = (id, callback) => {
        let user = {
            id,
            name: 'Rajeev'
        };
        setTimeout(() => {
            callback(user);
        }, 3000);
    };

    getUser(3, (userObject) => {
       console.log(userObject);
    });
