let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.addEventListener('DOMContentLoaded', () => {
  const addToCartBtn = document.getElementById('addToCartBtn');
  addToCartBtn.addEventListener('click', addToCart);
});

function addToCart() {
  const tea = JSON.parse(localStorage.getItem('selectedTea'));
  const quantity = document.getElementById('quantity').value;


  const cartItem = {
    id: tea.id,
    name: tea.name,
    price: tea.price,
    quantity: parseInt(quantity),
    image: tea.image // Add the image to the cart item
  };

  const existingItemIndex = cart.findIndex(item => item.id === cartItem.id);

  if (existingItemIndex !== -1) {
    cart[existingItemIndex].quantity += cartItem.quantity;
  } else {
    cart.push(cartItem);
  }


  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Item added to cart!');
}
