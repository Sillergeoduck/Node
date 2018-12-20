    console.log("Starting app");

    setTimeout( () => {
       console.log("Inside of CallBack");
    }, 2000);

    setTimeout( () => {
        console.log("Zero time out");
    },0);

    console.log("Ending app");

    