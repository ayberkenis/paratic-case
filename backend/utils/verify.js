const jwt = require('jsonwebtoken');
const secret = require('dotenv').config().parsed.JWT_SECRET;

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
        req.user = decoded;
        next();
    });
}

module.exports = verifyToken;