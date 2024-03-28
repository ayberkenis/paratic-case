
const express = require('express');
const app = express();
const port = 8000;
app.use(express.json());
const connection = require('./db.js');
const fs = require('fs');
/*const sqlFile = require('fs').readFileSync('./_initial.sql').toString();*/

const authRoutes = require('./api/auth.js');
const ratesRoutes = require('./api/rates.js');
const assetsRoutes = require('./api/assets.js');
app.use('/api/auth',  authRoutes)
app.use('/api/rates', ratesRoutes)
app.use('/api/assets', assetsRoutes)

app.get('/', (req, res) => {

    res.json({ message: 'Paratic', version: '0.1', serverTime: new Date(), status: 'OK', uptime: process.uptime()});
    

});
app.listen(port, () => {
    console.log(`Paratic Piyasalar Backend listening at http://localhost:${port}`);
    }
);