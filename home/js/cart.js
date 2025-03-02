let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    cart.forEach(item => {
        const div = document.createElement("div");
        div.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(div);
    });
}

document.getElementById("checkout-button")?.addEventListener("click", function() {
    window.location.href = "payment.html";
});

updateCartDisplay();