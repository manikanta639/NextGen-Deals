const products = [
    {
        image: "https://rukminim2.flixcart.com/image/1200/1047/xif0q/shopsy-headphone/x/7/a/bluetooth-yes-airpod-pro-ax44-earbuds-with-touch-sensor-original-imahatu6jqqykfm6.jpeg?q=60&crop=false",
        link: "https://extp.in/Nti2Eh",
        number: "#501"
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
