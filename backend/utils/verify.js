const jwt = require('jsonwebtoken');
const secret = require('dotenv').config().parsed.JWT_SECRET;

const connection = require('../db.js');

function verifyToken(req, res, next) {
    const _token = req.headers['authorization'];
    const token = _token && _token.split(' ')[1];
    if (!token) {
        return res.status(403).send('No token provided');
    }
    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({error: 'Failed to authenticate token'});
        }
        
        connection.query(
            'SELECT * FROM users WHERE email = ?',
            [decoded.email],
            (error, results) => {
                if (error) {
                    res.status(500).send('An error occurred');
                } else if (results.length === 0) {
                    res.status(401).send('Invalid email or password');
                } else {
                    req.user = {
                        email: results[0].email,
                        username: results[0].username,
                        id: results[0].id,
                        avatar: results[0].avatar
                    };
                    next();
                
                }
            }
        );

    });
}

module.exports = verifyToken;