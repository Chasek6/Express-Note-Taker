const fs =require ('fs');
const { json } = require('stream/consumers');
const utils = require('utils');

// This function is a promise that will generate a file with the given name and content.
const readsFile = (utils.promisify(fs.readFile));


// this will write the file to the given path.
const writesFile = (location, note) =>
fs .writeFile(location, json.stringify(note), (err) => 
err ? console.log(err) : console.info(`/nData written to ${location}`));



// this will read the file from the given path.
const both = (location, note) => {
    fs.readFiles(location, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            const data =JSON.parse(data);
            data.push(note);
            writesFile(location, data);
        }
    }
}:
