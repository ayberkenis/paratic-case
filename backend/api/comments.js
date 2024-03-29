const express = require('express');
const router = express.Router();
const connection = require('../db.js');
const verifyToken = require('../utils/verify.js');


router.get('/featured/all',  (req, res) => {
    /*
    This function returns all featured comments
    */

    connection.query(
        'SELECT c.*, u.id AS author_id, u.username AS author_username, u.avatar AS author_avatar FROM comments c INNER JOIN users u ON c.author_id = u.id WHERE c.featured = 1 AND c.exchange_code = ? ORDER BY c.commented_at DESC LIMIT 5',
        [req.query.exchange_code],
        (error, results) => {
            if (error) {
                console.log(error);
                res.status(500).json({status:'An error occurred'});
            } else {
                res.json(results);
            }
        }
    );
});

router.get('/all',  (req, res) => {
    /* 
    This function returns all comments
    */
    connection.query(
        'SELECT c.*, u.id AS author_id, u.username AS author_username, u.avatar AS author_avatar FROM comments c INNER JOIN users u ON c.author_id = u.id WHERE c.exchange_code = ? ORDER BY c.commented_at DESC',
        [req.query.exchange_code],
        (error, results) => {
            if (error) {
                console.log(error);
                res.status(500).json({status:'An error occurred'});
            } else {
                res.json(results);
            }
        }
    );
});  

router.post('/add', verifyToken, (req, res) => {
    /* 
    This function adds a new comment
    */
    const author_id = req.user.id;

    connection.query(
        'INSERT INTO comments (exchange_code, author_id, content, commented_at, featured) VALUES (?, ?, ?, NOW(), 0)',
        [req.body.exchange_code, author_id, req.body.content],
        (error, results) => {
            if (error) {
                console.log(error);
                res.status(500).json({status:'An error occurred'});
            } else {
                res.status(200).json({status:'Comment added'});
            }
        }
    );
});

module.exports = router;
