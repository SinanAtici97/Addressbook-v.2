//////////////////////////////////////////////////////////////////////////////////////////////////
const express = require('express'); //import express 
const bodyParser = require('body-parser'); //import bodyparser middleware
const { mongoose } = require('./db.js');
var contactController = require('./controllers/contactController.js');
const cors = require('cors');
//////////////////////////////////////////////////////////////////////////////////////////////////
var app = express(); //create app
app.use(bodyParser.json());
app.use(cors());
const PORT = 3000; // server port number
//////////////////////////////////////////////////////////////////////////////////////////////////

app.use('/contacts', contactController);




app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`)) // for backticks press alt+96