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
            aboutUs: '/about-us',
            catalogue: '/catalogue',
            home: '/',
            login: '/login',
            orders: '/orders',
            product: '/product',
            products: '/products',
            profile: '/profile',
            register: '/register',
            shoppingCart: '/shopping-cart',
            toStart: '/to-start',
            whyYouShould: '/why-you-should-choose-us',
            contactInformation: '/contact-information',
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
        this.app.use(this.paths.aboutUs, require('../routes/about-us'));
        this.app.use(this.paths.catalogue, require('../routes/catalogue'));
        this.app.use(this.paths.home, require('../routes/home'));
        this.app.use(this.paths.login, require('../routes/login'));
        this.app.use(this.paths.orders, require('../routes/orders'));
        this.app.use(this.paths.products, require('../routes/products'));
        this.app.use(this.paths.profile, require('../routes/profile'));
        this.app.use(this.paths.register, require('../routes/register'));
        this.app.use(this.paths.shoppingCart, require('../routes/shopping-cart'));
        this.app.use(this.paths.toStart, require('../routes/to-start'));
        this.app.use(this.paths.whyYouShould, require('../routes/why-you-should-choose-us'));
        this.app.use(this.paths.product, require('../routes/product'));
        this.app.use(this.paths.contactInformation, require('../routes/contact-information'));
    }


}


module.exports = Server;