const express = require('express');
const https = require('https');
const { port, mongoURI } = require('../config');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const path = require('path');

const app = express();

mongoose.connect(mongoURI, {useCreateIndex: true, useNewUrlParser: true })
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err));

app.use(express.static(path.join(__dirname, '../client/src/assets')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'))
})

app.listen(port, () => {
  console.log(`Server is running on http:/localhost:${port}`)
});


