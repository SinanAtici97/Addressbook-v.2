const mongoose = require('mongoose'); //import mongoose



// MONGODB PLUGIN DEFINITION /////////////////////////////////////////////////////////////////////
//username = "sinan";
//password = "bXF51W8Noo78LbZN"
//mongoDB Compass Link = mongodb+srv://sinan:bXF51W8Noo78LbZN@addressbookv1.iezicwe.mongodb.net/test
const dbURL = 'mongodb+srv://sinan:bXF51W8Noo78LbZN@addressbookv1.iezicwe.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(dbURL) //connect to MongoDB server
    .then((result) => {console.log('MongoDB Connection is Established')}) //after connection, write to console
    .catch((err) => {console.log(err)}) //if there is an error, write to console error message

    module.exports = mongoose;