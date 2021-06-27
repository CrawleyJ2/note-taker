const fs = require ('fs');
const router = require ('express').Router();

// === API Routing ===

// get route for stored notes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'))
});

// post route for adding new notes
router.post('/notes', (req, res) => {
    console.log(req.body);
    res.json(req.body);
});

// delete saved notes???

module.exports = router;