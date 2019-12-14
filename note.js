const fs = require('fs')
const getNote = function () {
    return 'your notes....'
}

const addNote = function (title, body) {

    const notes = loadNotes()

    //user array filter mth
    // it will run thru the array
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {

        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)


        console.log("title added")
    } else {
        console.log("title taken")
    }

}

const saveNotes = function (notes) {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}

const loadNotes = function () {
    try {

        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (e) {
        //return empty array
        return []
    }
}

module.exports = {
    getNote: getNote,
    addnote: addNote

}