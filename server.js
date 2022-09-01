// requirements
const express = require('express');
const path = require('path');
// random id generater 
const uuid = require('./uuid.js');
// retrieving specific functions
const { readsFile, writesFile, both} = require('./fileGenerater.js')

// default port for local
const PORT = process.env.PORT || 3001;

// declaring express
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'index.html'))
);

// notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'notes.html'))
);


