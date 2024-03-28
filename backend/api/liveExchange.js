
const express = require('express');
const router = express.Router();
const connection = require('../db.js');


router.get('/', (req, res) => {
    connection.query(
        'SELECT * FROM currency_data ORDER BY Last DESC',
        (error, results) => {
            if (error) {
                console.log(error);
                res.status(500).send('An error occurred');
            } else {
                res.json(results);
            }
        }
    );

})


module.exports = router;