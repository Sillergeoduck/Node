    // var obj = {
    //   'name': 'Rajeev',
    // };
    // var stringObj = JSON.stringify(obj);
    // console.log(typeof stringObj);
    // console.log(stringObj);
    //
    // var personString = '{"name": "Rajeev Lochan", "age": 31}';
    // var person = JSON.parse(personString);
    // console.log(typeof person);
    // console.log(person);


    const fs = require('fs');

    var originalNote = {
        title : 'some title',
        body : 'some body'
    };
    var originalNoteString = JSON.stringify(originalNote);

    fs.writeFileSync('notes.json', originalNoteString);

    var noteString = fs.readFileSync('notes.json');

    //note
    var note = JSON.parse(noteString);

    console.log(typeof note);
    console.log(note.title);