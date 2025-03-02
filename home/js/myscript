document.addEventListener("DOMContentLoaded", function() {

    const searchInput = document.querySelector(".nav-icons input");
    const productCards = document.querySelectorAll(".product-card");

    searchInput.addEventListener("input", function() {
        const searchText = searchInput.value.toLowerCase();
        productCards.forEach(card => {
            const productName = card.querySelector("p").textContent.toLowerCase();
            if (productName.includes(searchText)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });

    const cartIcon = document.querySelector(".cart-icon");
    cartIcon.addEventListener("click", function() {
        alert("Cart functionality coming soon!");
    });

    document.querySelectorAll(".nav-links a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute("href").substring(1);
            document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
        });
    });
});