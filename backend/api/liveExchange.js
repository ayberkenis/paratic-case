
const express = require('express');
const router = express.Router();
const connection = require('../db.js');


router.get('/', (req, res) => {
    connection.query(
        'SELECT * FROM currency_data ORDER BY Last DESC',
        (error, results) => {
            if (error) {
                
                res.status(500).json({status:'An error occurred'});
            } else {
                res.json(results);
            }
        }
    );

})


module.exports = router;