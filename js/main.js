const products = document.getElementsByClassName('product-link');

for (let product of products) {
  product.addEventListener('click', () => {
    window.location.href = 'product.html';
  });
}

const carts = document.getElementsByClassName('cart-button');

for (let cart of carts) {
  cart.addEventListener('click', (event) => {
    event.stopPropagation();
    event.preventDefault();
  });
}