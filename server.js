// modules and requirements
const fs = require ('fs');
const express = require ('express');
const path = require ('path');
const db = require ('./db/db.json');

const PORT = process.env.PORT || 3001;
const app = express ();
const routes = require ('./routes/routing');

// middleware for handling incoming notes and serving static files
app.use (express.urlencoded({ extended: true }));
app.use (express.static('public'));
app.use (express.json());
app.use ('/api', routes);

// === Webpage Routing ===

// get route for index.html
app.get ('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});
// get route for notes.html
app.get ('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});
// 'wildcard' routing
app.get ('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen (PORT, () => {
    console.log (`Active server on port ${PORT}!`);
});