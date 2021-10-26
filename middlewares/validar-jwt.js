const { request, response } = require('express');
const jwt = require('jsonwebtoken');
const { LocalStorage } = require('node-localstorage');

const validarJWT = async ( req = request, res = response, next) => {

    //localStorage.setItem('JWT', 'prueba');

    localStorage = new LocalStorage('./scratch');

    localStorage.setItem('JWT', 'anything');
    const session = localStorage.getItem('JWT');
    console.log(session);
    //localStorage.setItem('JWT', 'anything');

    if( !session ){
        res.redirect( '/login' );
    }

    next();

    // const token = req.header('x-token');

    // if ( !token ) {
    //     return res.status(401).json({
    //         msg: 'No hay token en la petición'
    //     });
    // }

    // try {

    //     const {uid} = jwt.verify( token, process.env.SECRETORPRIVATEKEY);

    //     //leemon usuario de mongo
    //     const usuario = await Usuario.findById( uid );

    //     if( !usuario ){
    //         return res.status(401).json({
    //             msg: 'Token no válido - usuario no existe en bd'
    //         }); 
    //     }

    //     //verificamos que el uid no esté en false (mongo)
    //     if( !usuario.estado ) {
    //         return res.status(401).json({
    //             msg: 'Token no válido - usuario con estado: false'
    //         });
    //     }


    //     req.usuario = usuario;

    //     next();
    // } catch (error) {
    //     console.log(error)
    //     res.status(401).json({
    //         msg: 'Token no válido'
    //     })
    // }

}

module.exports = {
    validarJWT
}