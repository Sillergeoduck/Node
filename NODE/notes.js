    const fs = require('fs');

    let fetchNotes =  () => {
        try{
            let notesString = fs.readFileSync('notes-data.json');
            return JSON.parse(notesString.toString());
        } catch (e) {
            return [];
        }
    };

    let saveNotes = (notes) => {
        return fs.writeFileSync('notes-data.json', JSON.stringify(notes));
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
        } else {
            console.log("Duplicate Notes!!!");
        }
    };

    let removeNote = (title) => {
        let notes = fetchNotes();
        let removeNotes = notes.filter((note) => note.title !== title);
        saveNotes(removeNotes);
        return notes.length !== removeNotes.length;
    };

    let readNote  = (title) => {
        let notes = fetchNotes();
        let currentNote = notes.filter( (note) => note.title === title);
        return currentNote[0];
    };

    let getAllNotes =  () => {
        return fetchNotes();
    };

    module.exports = {
        addNote,
        removeNote,
        readNote,
        getAllNotes
    };