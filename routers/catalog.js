const express = require('express');
const router = express.Router();
const catalogController = require('../controllers/catalogController');
const catalog = catalogController.index;

router.get('/', catalog);

router.get('/product', (req, res) => {
    let id = req.query.product;
    res.redirect('/product/?product=' + id);
});


module.exports = router;