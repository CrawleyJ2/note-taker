const fs = require ('fs');
const router = require ('express').Router();

// === API Routing ===

// get route for stored notes
router.get ('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'))
});

// post route for adding new notes
router.post ('/notes', (req, res) => {
    // parse current notes
    let currentNotes = JSON.parse(fs.readFile('../db/db.json', 'utf8'));
    // declare new note
    let newNotes = req.body;
    // establish id of new note
    newNotes.id = saved.length;
    // push new note to notes db file
    currentNotes.push(newNotes);
});

// delete saved notes???
router.delete ('.')

module.exports = router;