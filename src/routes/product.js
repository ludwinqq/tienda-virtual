'use strict';

const express = require('express');

const router = express.Router();

router.get('/', function(req, res){
    res.send('hola productos');
});

module.exports = router;