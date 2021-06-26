const fs = require ('fs');
const express = require ('express');

const PORT = process.env.PORT || 3001;

const app = express ();

// get route for index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});
// get route for notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.listen(PORT, () => {
    console.log ('Active server on port 3001!');
});