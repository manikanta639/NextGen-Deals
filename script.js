// Sample Product Data
const products = [
  {
    name: "Water Dispenser",
    image:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/jug/6/g/v/rust-proof-stainless-steel-inner-copper-jug-with-lid-1-5-liter-original-imahgf2fjs9gcz6s.jpeg?q=70&crop=false",
    link: "https://fkrt.co/jDrxKD",
    number: "#1",
    category: "electronics",
  },
  {
    name: "S10 Plus Cover",
    image: "https://m.media-amazon.com/images/I/51mL4Dqx-2L._SL1297_.jpg",
    link: "https://amzn.to/48lTVrz",
    number: "#201",
    category: "electronics",
  },
];

// Show temporary toast message
function showMessage(msg) {
  const existing = document.getElementById("user-message");
  if (existing) existing.remove();

  const messageDiv = document.createElement("div");
  messageDiv.id = "user-message";
  messageDiv.textContent = msg;
  messageDiv.style.position = "fixed";
  messageDiv.style.bottom = "20px";
  messageDiv.style.left = "50%";
  messageDiv.style.transform = "translateX(-50%)";
  messageDiv.style.backgroundColor = "rgba(0,0,0,0.8)";
  messageDiv.style.color = "white";
  messageDiv.style.padding = "10px 20px";
  messageDiv.style.borderRadius = "8px";
  messageDiv.style.zIndex = 1000;
  messageDiv.style.fontSize = "16px";
  document.body.appendChild(messageDiv);

  setTimeout(() => {
    messageDiv.remove();
  }, 2000); // message disappears after 2 seconds
}

function renderProducts(list, hideHeader = false) {
  toggleHeaderVisibility(!hideHeader);
  const container = document.getElementById("product-container");
  if (!container) return;
  container.innerHTML = "";

  list.forEach((product) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <i class="fa fa-heart wishlist-icon ${
        isInWishlist(product) ? "active" : ""
      }"></i>
      ${product.number ? `<span class="product-number">${product.number}</span>` : ""}
      <img src="${product.image}" class="product-image" />
      <p>${product.name}</p>
      <div class="button-row">
        <button class="buy-btn">Buy Now</button>
        <button class="cart-btn">Add to Cart</button>
      </div>`;

    const wishlistIcon = card.querySelector(".wishlist-icon");
    wishlistIcon.addEventListener("click", () => {
      wishlistIcon.classList.toggle("active");
      toggleWishlistItem(product);
    });

    card.querySelector(".buy-btn").addEventListener("click", () => {
      window.open(product.link, "_blank");
    });
    card.querySelector(".cart-btn").addEventListener("click", () => {
      addToCart(product);
    });

    // Make product image clickable
    const img = card.querySelector(".product-image");
    if (img) {
      img.style.cursor = "pointer";
      img.addEventListener("click", () => {
        window.open(product.link, "_blank");
      });
    }

    container.appendChild(card);
  });
}

function isInWishlist(product) {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  return wishlist.find((p) => p.name === product.name);
}
function toggleWishlistItem(product) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const exists = wishlist.find((p) => p.name === product.name);
  if (exists) {
    wishlist = wishlist.filter((p) => p.name !== product.name);
    showMessage(`${product.name} removed from wishlist`);
  } else {
    wishlist.push(product);
    showMessage(`${product.name} added to wishlist`);
  }
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (!cart.find((p) => p.name === product.name)) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    showMessage(`${product.name} added to cart`);
    updateCartCount();
  }
}

function filterByCategory(cat) {
  const filtered = cat === "all" ? products : products.filter((p) => p.category === cat);
  animatePageTransition(() => renderProducts(filtered));
}

function filterProducts() {
  const val = document.getElementById("search").value.toLowerCase();
  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(val) || (p.number && p.number.toString().includes(val))
  );
  animatePageTransition(() => renderProducts(filtered));
}

function updateCartCount() {
  const cartCountSpan = document.getElementById("cart-count");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cartCountSpan) {
    if (cart.length > 0) {
      cartCountSpan.style.display = "inline-block";
      cartCountSpan.textContent = cart.length;
    } else {
      cartCountSpan.style.display = "none";
    }
  }
}

function updateActiveNavLink() {
  const links = document.querySelectorAll(".bottom-taskbar a");
  const currentFile = window.location.pathname.split("/").pop();
  links.forEach((link) => {
    if (
      link.getAttribute("href") === currentFile ||
      (currentFile === "" && link.getAttribute("href") === "index.html")
    ) {
      link.classList.add("active");
    }
  });
}

// Wishlist page functions
function renderWishlist() {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const container = document.getElementById("wishlist-products");
  if (!container) return;
  container.innerHTML = "";
  if (wishlist.length === 0) {
    container.innerHTML = "<p style='text-align:center; padding:20px;'>No items in wishlist.</p>";
    return;
  }
  wishlist.forEach((p, index) => {
    if (p && p.name && p.image && p.link) {
      container.innerHTML += `
        <div class="card">
          <img src="${p.image}" alt="${p.name}" onclick="window.open('${p.link}', '_blank')" />
          <p onclick="window.open('${p.link}', '_blank')">${p.name}</p>
          <button class="remove-btn" onclick="removeFromWishlist(${index})">Remove</button>
        </div>`;
    }
  });
}

function removeFromWishlist(index) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  if (index > -1 && index < wishlist.length) {
    const removedProduct = wishlist[index];
    wishlist.splice(index, 1);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    renderWishlist();
    showMessage(`${removedProduct.name} removed from wishlist`);
  }
}

// Cart page functions
function renderCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cart-products");
  if (!container) return;
  container.innerHTML = "";
  if (cart.length === 0) {
    container.innerHTML = "<p style='text-align:center; padding:20px;'>Your cart is empty.</p>";
    return;
  }
  cart.forEach((p, index) => {
    if (p && p.name && p.image && p.link) {
      container.innerHTML += `
        <div class="card">
          <img src="${p.image}" alt="${p.name}" onclick="window.open('${p.link}', '_blank')" />
          <p onclick="window.open('${p.link}', '_blank')">${p.name}</p>
          <div class="button-row">
            <a href="${p.link}" target="_blank" class="buy-btn">Buy Now</a>
            <button class="remove-from-cart-btn" onclick="removeFromCart(${index})">Remove</button>
          </div>
        </div>`;
    }
  });
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (index > -1 && index < cart.length) {
    const removedProduct = cart[index];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
    updateCartCount();
    showMessage(`${removedProduct.name} removed from cart`);
  }
}

window.onload = () => {
  if (document.getElementById("product-container")) {
    renderProducts(products);
  }
  if (document.getElementById("wishlist-products")) {
    renderWishlist();
  }
  if (document.getElementById("cart-products")) {
    renderCart();
  }
  updateCartCount();
  updateActiveNavLink();
};
