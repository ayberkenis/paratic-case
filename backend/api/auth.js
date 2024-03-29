const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { encrypt, decrypt } = require('../utils/encrypt.js');
const secret = require('dotenv').config().parsed.JWT_SECRET;
const connection = require('../db.js');
const verifyToken = require('../utils/verify.js');

router.post('/login', (req, res) => {
    connection.query(
        'SELECT * FROM users WHERE email = ? AND password = ?',
        [req.body.email, decrypt(req.body.password)],
        (error, results) => {
            if (error) {
                res.status(500).send('An error occurred');
            } else if (results.length === 0) {
                res.status(401).send('Invalid email or password');
            } else {
                const token = jwt.sign(
                    { email: req.body.email, username: results[0].username, id: results[0].id, avatar: results[0].avatar },
                    secret,
                    { expiresIn: '2w' }
                );
                res.cookie('jwt', token, { httpOnly: true, maxAge: 14 * 24 * 60 * 60 * 1000 }); // Setting the JWT token as a cookie
                res.cookie('user', JSON.stringify({ email: req.body.email, username: results[0].username, id: results[0].id, avatar: results[0].avatar }), { maxAge: 14 * 24 * 60 * 60 * 1000 });
                res.send({ token, user: { email: req.body.email, username: results[0].username, id: results[0].id, avatar: results[0].avatar } });
            }
        }
    );
});

router.post('/register', (req, res) => {
    connection.query(
        'INSERT INTO users (email, password) VALUES (?, ?)',
        [req.body.email, encrypt(req.body.password)],
        (error, results) => {
            if (error) {
                res.status(500).send('There is a user with the same email.');
            } else {
                const token = jwt.sign(
                    { email: req.body.email },
                    secret,
                    { expiresIn: '2w' }
                );
                res.cookie('jwt', token, { httpOnly: true, maxAge: 14 * 24 * 60 * 60 * 1000 }); // Setting the JWT token as a cookie
                res.send({ token });
            }
        }
    );
});


router.post('/logout', verifyToken, (req, res) => {
    res.clearCookie('jwt');
    res.clearCookie('user');
    res.json({status: 'Logged out'});
}
);

module.exports = router;
