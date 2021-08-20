const fs = require('fs');
const path = require('path');

function findById(id, notesArray) {

}

function validateNote(note) {
    if (!note.title && !note.body) {
        return false;
    }
    return true;
};

module.exports = {
    findById,
    validateNote
};