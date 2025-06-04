document.addEventListener('DOMContentLoaded', () => {
  const addToCartBtn = document.getElementById('addToCartBtn');
  const cartMessage = document.getElementById('cartMessage');

  addToCartBtn.addEventListener('click', () => {
    cartMessage.classList.remove('hidden');
    cartMessage.classList.add('show');

    setTimeout(() => {
      cartMessage.classList.remove('show');
      cartMessage.classList.add('hidden');
    }, 2000);
  });
});
