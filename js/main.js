const buttonCart = document.querySelector('#button-shopping-cart');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

buttonCart.addEventListener('click', toggleModal);
modalClose.addEventListener('click', toggleModal);

function toggleModal() {
    modal.classList.toggle('modal-active');
}

new WOW().init();
