const express = require('express');
const cors = require('cors');

class Server {

    app;
    port;
    paths;

    constructor(){
        
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            home: '/',
            aboutUs: '/about-us',
            products: '/products',
            orders: '/orders',
            profile: '/profile'
        };

        this.middleware();

        this.routes();
    }

    middleware(){
        this.app.use(cors());

        this.app.use( express.static('public') );
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`listen at port: ${this.port}`);
        });
    }

    routes(){
        this.app.use(this.paths.home, require('../routes/home'));
        this.app.use(this.paths.products, require('../routes/products'));
        // this.app.use(this.paths.home)
        // this.app.use(this.paths.home)
        // this.app.use(this.paths.home)
    }


}


module.exports = Server;