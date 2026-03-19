const products = document.getElementsByClassName('product-link');

for (let product of products) {
  product.addEventListener('click', () => {
    window.location.href = 'product.html';
  });
}

document.getElementById('cart-button').addEventListener('click', function(event){
    event.stopPropagation();
    event.preventDefault();
});