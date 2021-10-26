const path = require('path');
const { Router } = require('express');
const { check } = require('express-validator');
const { validarJWT } = require('../middlewares/validar-jwt');
const { mostrarPerfil } = require('../controllers/profile');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/', [ 
    validarCampos,
 ] , mostrarPerfil);

module.exports = router;