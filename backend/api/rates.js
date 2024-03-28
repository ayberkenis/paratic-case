
const express = require('express');
const router = express.Router();
const connection = require('../db.js');
const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));


const getCurrencyFlag = (currencyCode) => {
    // This function returns the flag image of a currency code.
    // Example Endpoint: https://restcountries.com/v2/currency/usd
    
    return fetch(`https://restcountries.com/v2/currency/${currencyCode}?fields=flag`).then(
        response => response.json()
    ).then(
        data => {
            return data;
        }
    ).catch(
        error => {
            console.log(error);
            return '';
        }
    );
    
}

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

router.get('/:code', (req, res) => {
    connection.query(
        'SELECT * FROM currency_data WHERE Code = ?',
        [(req.params.code).toUpperCase()],
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

router.get('/flag/:code', (req, res) => {
    getCurrencyFlag(req.params.code).then(
        flag => {
            res.send(flag);
        }
    );
}
)


router.get('/bank/:bank', (req, res) => {
    connection.query(
        'SELECT * FROM banks WHERE Code = ? AND Bank = ?',
        [(req.params.code).toUpperCase(), req.params.bank],
        (error, results) => {
            if (error) {
                console.log(error);
                res.status(500).send('An error occurred');
            } else {
                res.json(results);
            }
        }
    );
}
)


module.exports = router;