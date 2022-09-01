const { Router } = require('express');
const fs =require ('fs');
const { get } = require('http');
const { json } = require('stream/consumers');
const util = require('util');

// This function is a promise that will generate a file with the given name and content.
const readsFile = (util.promisify(fs.readFile));


// this will write the file to the given path.
const writesFile = (location, note) =>
fs.writeFile(location, JSON.stringify(note), (err) => 
err ? console.log(err) : console.info(`/nData written to ${location}`));


// Router.get('/notes', (req, res) => {
//     fs.readFile('./db/db.json', (err, data) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.json(data);
//         }
//     }
// });
// this will read the file from the given path.
const both = (location, note) => {
    console.log(note);
    fs.readFiles (location, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            const data =JSON.parse(data);
            data.push(note);
            writesFile(location, data);
            // res.json(JSON.parse(data));
        }
    })
}
module.exports = { readsFile, writesFile, both };