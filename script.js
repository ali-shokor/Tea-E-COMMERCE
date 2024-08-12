// Example: Add to Cart functionality
document.getElementById('add-to-cart').addEventListener('click', () => {
    alert('Item added to cart!');
    // You can add logic to update the cart here
});

// Example: Remove item from cart
document.querySelectorAll('.remove-item').forEach(button => {
    button.addEventListener('click', (e) => {
        e.target.closest('.cart-item').remove();
        // Update the cart total here
    });
});

// Example: Form validation for checkout
document.querySelector('form').addEventListener('submit', (e) => {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;

    if (!name || !address) {
        e.preventDefault(); // Prevent form submission
        alert('Please fill out all required fields.');
    }
});
