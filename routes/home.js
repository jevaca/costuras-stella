const path = require('path');
const { Router } = require('express');
const { check } = require('express-validator');

const router = Router();

router.get('/home', (req, res) => {
    const pathHome = path.join(__dirname, '../public/index.html');
    res.sendFile( pathHome );
});

module.exports = router;