const path = require('path');
const { Router } = require('express');
const { check } = require('express-validator');

const router = Router();

router.get('/', (req, res) => {
    const pathHome = path.join(__dirname, '../public/views/about-us.html');
    res.sendFile( pathHome );
});

module.exports = router;