
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
                res.status(500).json({status:'An error occurred'});
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
                res.status(500).json({status:'An error occurred'});
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
})


router.get('/banks/all', (req, res) => {

    connection.query(
        'SELECT b.*, br.exchange_code, br.buy_rate, br.sell_rate, br.spread_rate, br.updated_at FROM banks b LEFT JOIN bank_rates br ON b.id = br.bank_id ORDER BY b.name ASC',
        (error, results) => {
            if (error) {
                console.log(error);
                res.status(500).json({status:'An error occurred'});
            } else {
                // Group the results by bank to include all rates for each bank
                res.json(results);
            }
        }
    );
});




module.exports = router;