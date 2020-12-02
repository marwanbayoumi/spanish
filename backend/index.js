require('dotenv').config()
const { urlencoded } = require('express');
const express = require('express');
const app = express();
const process = require('process');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT;
const connection = require('./dbHandler');
const tables = ["nouns", "adjectives", "prepositions"];

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/:table', (req, res) => {
  if (tables.includes(req.params.table)) {
    res.set('Access-Control-Allow-Origin', '*');
    connection.getContents(req.params.table, (err, data) => {
      if (err) {
        throw err;
      } else {
        res.json(data)
      }
    });
  } else {
    res.status(404).send("Page Not Found")
  }
})

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}/nouns`)
})
