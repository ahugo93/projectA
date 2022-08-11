const express = require('express');
const breads = express.Router();
const Bread = require('../models/breads')

//Index
breads.get('/', (req,res) => {
    res.render('Index', 
    { 
        breads: Bread 
        
    });
    //res.send(Bread);
});

//show
breeads.get('/:arrayIndex', (req,res) => {
    res.send(Bread[req.params.arrayIndex]);
});


module.exports = breads;