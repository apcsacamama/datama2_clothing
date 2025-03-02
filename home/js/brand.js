document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const brand = urlParams.get("brand");
    const brandTitle = document.getElementById("brand-title");
    const brandHeading = document.getElementById("brand-heading");
    const productGrid = document.getElementById("brand-products");

    const products = {
        adidas: [
            { name: "Adidas Ultraboost", price: 180, image: "adidas1.jpg" },
            { name: "Adidas Superstar", price: 100, image: "adidas2.jpg" }
        ],
        nike: [
            { name: "Nike Air Max", price: 150, image: "nike1.jpg" },
            { name: "Nike Blazer", price: 120, image: "nike2.jpg" }
        ],
        fila: [
            { name: "Fila Disruptor", price: 90, image: "fila1.jpg" }
        ]
    };

    if (brand && products[brand]) {
        brandTitle.textContent = `Shop ${brand.charAt(0).toUpperCase() + brand.slice(1)}`;
        brandHeading.textContent = `Available ${brand.charAt(0).toUpperCase() + brand.slice(1)} Shoes`;
        
        products[brand].forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");
            productCard.innerHTML = `
                <img src="images/${product.image}" alt="${product.name}">
                <p>${product.name}</p>
                <span>$${product.price}</span>
                <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
            `;
            productGrid.appendChild(productCard);
        });
    } else {
        brandHeading.textContent = "Brand not found.";
    }
});
