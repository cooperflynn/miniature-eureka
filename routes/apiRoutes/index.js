const { createNewNote, deleteNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');
const { v4: uuidv4 } = require('uuid');
const router = require('express').Router();


router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    //set ID with uuid NPM package
    req.body.id = uuidv4();

    // add note to json file and animals array
    const note = createNewNote(req.body, notes);
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    const result = deleteNote(req.params.id, notes);
    res.json(result);
});

module.exports = router;
