const { response } = require('express');
const express = require('express'); //import express 
var router =express.Router();
var { Contact } = require('../models/contacts');
var ObjectId = require('mongoose').Types.ObjectId;

router.get('/', (req,res) => {
    Contact.find((err,docs) => {
        if(!err) { res.send(docs); }
        else {console.log('Error in Retriving Contacts :' + JSON.stringify(err, undefined, 2))}
    });
});

router.get('/:id',(req,res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
        Contact.findById(req.params.id, (err,doc) => {
            if (!err) { res.send(doc);}
            else { console.log('Error in Retriving Contact :' + JSON.stringify(err, undefined, 2)); }
        });
});

router.post('/',(req,res) => {
    var con = new Contact({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        address: req.body.address,
        number: req.body.number,
        email: req.body.email,

    });
    con.save((err,doc) =>{});
    if (!err) { res.send(doc); }
    else { console.log("Error in Contact save :" + JSON.stringify(err,  undefined, 2)); }
});

    router.put('/:id', (req,res) => {
        if(!ObjectId.isValid(req.params.id))
            return res.status(400).send(`No record with giben id : $(req.params.id)`);

            var con = {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                address: req.body.address,
                number: req.body.number,
                email: req.body.email,
            };
            Contact.findByIdAndUpdate(req.params.id, { $set: con }, { new: true}, (err,doc) => {
                if (!err) { res.send(doc); }
                    else {console.log('Error in Contact Update :' +JSON.stringify(err, undefined, 2)); }
            });
    });


    router.delete('/:id', (req, res) => {
        if(!ObjectId.isValid(req.params.id))
            return res.status(400).send(`No record with id: ${req.params.id}`);

            Contact.findByIdAndRemove(req.params.id, (err,doc) => {
                if(!err) { res.send(doc); }
                    else { console.log('Error in Contact Delete :' + JSON.stringify(err, undefined, 2));}
            });
    });


module.exports = router;