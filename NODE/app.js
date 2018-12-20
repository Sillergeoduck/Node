    const yargs = require('yargs');

    const notes = require('./notes');

    let command = yargs
        .command('Add', 'Adding a Note', {
            title : {
                describe: 'Adding a note',
                demand: true,
                alias: 't',
            }
        })
        .help()
        .argv._[0];

    if (command === 'add') {
        notes.addNote(yargs.argv.title, yargs.argv.body);
    } else if (command === 'read') {
        let readNote = notes.readNote(yargs.argv.title);
        if (readNote) {
            console.log("Reading a note");
            console.log("-----");
            console.log(`${readNote.title} ${readNote.body}`);
        }else {
            console.log("Noted not Found!!!");
        }
    } else  if (command === 'remove') {
       let message =  notes.removeNote(yargs.argv.title);
       if (message) {
           console.log('Note was removed!!!');
       } else {
           console.log("Note was not found!!!");
       }
    } else if (command === 'list') {
       let allNotes = notes.getAllNotes();
       allNotes.forEach( (note) => console.log(note));
    } else {
        console.log("Command not found!!!");
    }

