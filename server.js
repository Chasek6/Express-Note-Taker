// requirements
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const path = require('path');
const fs = require('fs');
// random id Generator

// retrieving specific functions
const { readsFile, writesFile, both} = require('./filegenerator.js')

// default port for local
const PORT = process.env.PORT || 3001;

// declaring express
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// app.get('/api/notes', (req, res) => {
//   fs.readFile('./db/db.json', (err, data) => {
//       if (err) {
//           console.log(err);
//       } else {
//           res.json(data);
//       }
//   });
// });
app.use("/api", apiRoutes);
// notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
);
// homepage
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

