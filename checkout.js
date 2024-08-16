document.addEventListener('DOMContentLoaded', function() {
    updateTotalAmount();
});

function updateTotalAmount() {
    const totalAmount = document.getElementById("amount");
    totalAmount.innerHTML =  getTotal();
}

function getTotal() {
    const urlParams = new URLSearchParams(window.location.search);
    const totalAmmount = urlParams.get('price'); // Fetch category from URL
    
    return totalAmmount
   
}

function clearCart() {
    localStorage.removeItem('cart');
}

document.getElementById('checkoutForm').addEventListener('submit', function(event){
    event.preventDefault(); 
    if (!validateForm()) {
        return;
    }
    const paymentMethod = document.querySelector('input[name="pay"]:checked');
    if (paymentMethod){
        if (paymentMethod.id === 'card') {
            window.location.href = 'templates/payByCard.html';
        } else {
            clearCart();
            window.location.href = 'templates/orderComplete.html';
        }
    } else {
        alert('Please select a payment method.');
    }
});

function validateForm() {
    const requiredFields = ['fullname', 'email', 'address', 'city', 'state', 'zip'];
    for (let field of requiredFields) {
        if (!document.getElementById(field).value) {
            alert(`Please fill out the ${field} field.`);
            return false;
        }
    }
    return true;
}
