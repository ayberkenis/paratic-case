
const express = require('express');
var cors = require('cors')
const app = express();
const port = 8000;
app.use(express.json());

/*const sqlFile = require('fs').readFileSync('./_initial.sql').toString();*/
app.use(cors())
const authRoutes = require('./api/auth.js');
const ratesRoutes = require('./api/rates.js');
const commentsRoutes = require('./api/comments.js');
const assetsRoutes = require('./api/assets.js');
app.use('/api/auth',  authRoutes)
app.use('/api/rates', ratesRoutes)
app.use('/api/assets', assetsRoutes)
app.use('/api/comments', commentsRoutes)

app.get('/', (req, res) => {

    res.json({ message: 'Paratic', version: '0.1', serverTime: new Date(), status: 'OK', uptime: process.uptime()});
    

});
app.listen(port, () => {
    console.log(`Paratic Piyasalar Backend listening at http://localhost:${port}`);
    }
);