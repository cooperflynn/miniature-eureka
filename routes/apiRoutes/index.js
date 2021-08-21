const { createNewNote, validateNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');
const { v4: uuidv4 } = require('uuid');
const router = require('express').Router();


router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    //set ID with uuid NPM package
    req.body.id = uuidv4();

    // add note to json file and animals array if input is valid 
    // if (!validateNote(req.body)) {
    //     res.status(400).send('The note is not properly formatted.');
    // } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    // }
});

module.exports = router;
