const products = [
    {
        image: "https://d3lopvpsghm5w.cloudfront.net/Screenshot%202025-03-29%20at%206.28.58%E2%80%AFPM.webp?w=100&h=100&fit=crop&auto=format",
        link: "https://amzn.to/3E0U9aU",
        number: "#589"
    },
];

function renderProducts() {
    const container = document.getElementById("product-container");
    container.innerHTML = ""; // Clear existing products

    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <div class="product-number">${product.number}</div>
            <a href="${product.link}" target="_blank">
                <img src="${product.image}" alt="Product">
            </a>
        `;

        container.appendChild(card);
    });
}

function filterProducts() {
    const searchValue = document.getElementById("search").value.toLowerCase().replace("#", "");

    document.querySelectorAll(".card").forEach(card => {
        const img = card.querySelector("img");
        const productImageSrc = img ? img.src.toLowerCase() : "";
        const productNumber = card.querySelector(".product-number")?.innerText.toLowerCase().replace("#", "") || "";

        const matches = productImageSrc.includes(searchValue) || productNumber.includes(searchValue);
        card.style.display = matches ? "block" : "none";
    });
}

document.addEventListener("DOMContentLoaded", renderProducts);
