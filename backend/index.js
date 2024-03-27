
const express = require('express');
const app = express();
const port = 8000;
app.use(express.json());

/*const sqlFile = require('fs').readFileSync('./_initial.sql').toString();*/

const authRoutes = require('./api/auth.js');
app.use('/api/auth',  authRoutes)

app.listen(port, () => {
    console.log(`Paratic Piyasalar Backend listening at http://localhost:${port}`);
    }
);