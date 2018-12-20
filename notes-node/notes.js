    const fs = require('fs');

    let fetchNotes = () => {
        try {
            let noteString =  fs.readFileSync('notes-data.json');
            return JSON.parse(noteString.toString());
        } catch (e) {
            return [];
        }
    };

   let saveNotes = (notes) => {
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    };

    let addNote = (title, body) => {
        let notes = fetchNotes();
        let note = {
            title,
            body
        };
        let duplicateNotes = notes.filter((note) => note.title === title);
        if (duplicateNotes.length === 0) {
            notes.push(note);
            saveNotes(notes);
            return note;
        }

    };

    let getAll = () => {
       return fetchNotes();
    };

    let removeNote = (title) => {
        let notes = fetchNotes();
        let filteredNotes = notes.filter((note) => note.title !== title);
        saveNotes(filteredNotes);
    };

    let readNote = (title) => {
        let notes = fetchNotes();
        let filteredNotes = notes.filter((note) => note.title === title);
        return filteredNotes[0];
    };

    let logNote = (note) => {
        debugger;
        console.log("------");
        console.log(`${note.title}`);
        console.log(`${note.body}`);
    };

    module.exports = {
     addNote,
     getAll,
     removeNote,
     readNote,
     logNote
    };
