const path = require('path');

const mostrarPerfil = (req, res) => {

    const pathHome = path.join(__dirname, '../public/views/profile.html');
    res.sendFile( pathHome );

}

module.exports = {
    mostrarPerfil,
}