const fs = require ('fs');
const express = require ('express');

const PORT = process.env.PORT || 3001;

const app = express ();

// get route for index.html

// get route for notes.html

app.listen(PORT, () => {
    console.log ('Active server on port 3001!');
});