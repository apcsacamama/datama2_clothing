document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const style = urlParams.get("style");
    const styleTitle = document.getElementById("style-title");
    const styleHeading = document.getElementById("style-heading");
    const productGrid = document.getElementById("style-products");

    const products = {
        formal: [
            { name: "Oxford Shoes", price: 200, image: "formal1.jpg" },
            { name: "Leather Loafers", price: 180, image: "formal2.jpg" }
        ],
        casual: [
            { name: "Canvas Sneakers", price: 80, image: "casual1.jpg" }
        ],
        sports: [
            { name: "Running Shoes", price: 150, image: "sports1.jpg" }
        ]
    };

    if (style && products[style]) {
        styleTitle.textContent = `Shop ${style.charAt(0).toUpperCase() + style.slice(1)}`;
        styleHeading.textContent = `Available ${style.charAt(0).toUpperCase() + style.slice(1)} Shoes`;
        
        products[style].forEach(product => {
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
        styleHeading.textContent = "Style not found.";
    }
});