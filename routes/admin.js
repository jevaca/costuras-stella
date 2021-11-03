const path = require('path');
const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    const pathHome = path.join(__dirname, '../public/views/admin.html');
    res.sendFile( pathHome );
});

module.exports = router;