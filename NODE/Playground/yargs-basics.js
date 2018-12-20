    const yargs = require('yargs');


    let command = yargs
        .command('Add', 'Adding a Note', {
            title : {
                describe: 'Adding a note',
                alias: 't',
                demand: true
            }
        })
        .argv;
    console.log(command);