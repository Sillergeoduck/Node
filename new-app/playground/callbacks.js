console.log("start");
let getUser = (id, callback) => {
        let user = {
            name : 'Shelly'
        };
        console.log("userobj");
        setTimeout(() => {
            callback(user);
        },3000);
    };

    // getUser(3, (userObject) => {
    //     console.log(userObject);
    // });


    let someFunc = (userObject) => {
        console.log(userObject);
    };

    getUser(3, someFunc);

    console.log("End");