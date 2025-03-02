document.getElementById("pay-now")?.addEventListener("click", function() {
    alert("Payment successful! Thank you for your purchase.");
    localStorage.removeItem("cart");
    window.location.href = "index.html";
});