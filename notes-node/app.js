    const yargs = require('yargs');

    const notes = require('./notes.js');

    const titleOptions = {
        demand: true,
        alias: 't'
    };

    const bodyOptions = {
        demand: true,
        alias: 'b'
    };

    const argv = yargs
        .command('add', 'Add a new note', {
            title : titleOptions,
            body: bodyOptions
        })
        .command('list', 'List all the notes')
        .command('read', 'Read the note',{
            title : titleOptions
        })
        .command('remove', 'Remove the note', {
            title : titleOptions
        })
        .help()
        .argv;


    let command = argv._[0];

    if(command === 'add'){
       let note = notes.addNote(argv.title, argv.body);
       if (note) {
           console.log("Note has been written Successfully!!!");
           notes.logNote(note);
       } else {
           console.log("Duplicate Notes!!!");
       }
    } else if(command === 'list'){
        let allNotes = notes.getAll();
        console.log(`Printing ${allNotes.length} note(s)`);
        allNotes.forEach( (note) =>notes.logNote(note));
    } else if(command === 'remove'){
       notes.removeNote(argv.title);
    } else if(command === 'read'){
       let note = notes.readNote(argv.title);
       if (note) {
           notes.logNote(note);
       }else {
           console.log("Note not found !!");
       }
    }  else{
        console.log("command not found");
    }