const linkOrders = document.querySelector('#linkOrders');
const linkProfile = document.querySelector('#linkProfile');
const linkShoppingCart = document.querySelector('#linkShoppingCart');
const linkLogin = document.querySelector('#linkLogin');

const session = localStorage.getItem('JWT-costuras-stella');

if( !session ){
    linkOrders.style.display = 'none';
    linkProfile.style.display = 'none';
    linkShoppingCart.style.display = 'none';
} else {
    linkLogin.style.display = 'none';
}