const path = require('path');
const { Router } = require('express');
const { check } = require('express-validator');
const { logout } = require('../controllers/logout');

const router = Router();

router.get('/', logout);

module.exports = router;