
const express = require('express');
const router = express.Router();
const connection = require('../db.js');
const path = require('path');

router.get('/:name', (req, res) => {
    /* This functions returns image using the :name slug */
    res.sendFile(path.join(__dirname, `../assets/images/${req.params.name}`));
});


module.exports = router;