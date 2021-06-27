const fs = require ('fs');
const router = require ('express').Router();

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

    fs.writeFile('.db/db.json', JSON.stringify(currentNotes), err => {
        if (err) throw err;
        console.log('Note Saved!');
        res.json(currentNotes);
    });
});

// delete saved notes???
router.delete ('/notes/:id', (req, res) => {
    fs.writeFile('.db/db.json', JSON.stringify(currentNotes), err => {
        if (err) throw err;
        console.log('Note Saved!');
        res.json(currentNotes);
    });
});

module.exports = router;