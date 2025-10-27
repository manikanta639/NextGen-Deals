// ======================
// SAMPLE PRODUCT DATA
// ======================
const products = [
  {
    name: "Oil Dispenser",
    image: "https://m.media-amazon.com/images/I/81dzIeO48sL._SL1500_.jpg",
    link: "https://amzn.to/4qsYFCf",
    number: "#4",
    category: "home appliances",
  },
  {
    name: "LED Connectors",
    image: "https://m.media-amazon.com/images/I/61XApYALIAL._SL1500_.jpg",
    link: "https://www.amazon.in/dp/B0DYK1T3PT?social_share=cm_sw_r_cso_wa_apan_dp_DBVH07SBDVF991Q5B86S&th=1&linkCode=ll1&tag=nextgendea0f0-21&linkId=027b5706758eb2ccdbfc3329bc6f39e0&language=en_IN&ref_=as_li_ss_tl",
    number: "#3",
    category: "gadgets",
  },
  {
    name: "Beanie Hat ",
    image: "https://m.media-amazon.com/images/I/61GzVo5PEvL._SX679_.jpg",
    link: "https://www.amazon.in/dp/B07YHJG42G?social_share=cm_sw_r_cso_wa_apan_dp_5HKCT0S1JGTSS7ZTKV5V&linkCode=ll1&tag=nextgendea0f0-21&linkId=bc484d338d1cb7b0496a437214dce637&language=en_IN&ref_=as_li_ss_tl",
    number: "#2",
    category: "gadgets",
  },
  {
    name: "3 Axis Gimbal",
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/gimbal/h/e/z/-original-imah9ya5rhrvv9gg.jpeg?q=70&crop=false",
    link: "https://fkrt.co/SObkt2",
    number: "#1",
    category: "electronics",
  },
  
];

// ======================
// CLEANUP FUNCTION
// ======================
function cleanLocalStorage() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  cart = cart.filter(item => products.some(p => p.name === item.name));
  wishlist = wishlist.filter(item => products.some(p => p.name === item.name));

  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

// ======================
// POPUP MESSAGE FUNCTION
// ======================
function showPopupMessage(message) {
  const msg = document.createElement("div");
  msg.textContent = message;
  msg.style.position = "fixed";
  msg.style.bottom = "20px";
  msg.style.left = "50%";
  msg.style.transform = "translateX(-50%)";
  msg.style.background = "rgba(0,0,0,0.8)";
  msg.style.color = "white";
  msg.style.padding = "10px 20px";
  msg.style.borderRadius = "8px";
  msg.style.zIndex = "9999";
  msg.style.fontSize = "14px";
  document.body.appendChild(msg);
  setTimeout(() => msg.remove(), 2000);
}

// ======================
// ANIMATION & HELPERS
// ======================
function disableAnimations() {
  document.body.classList.add("no-animation");
}
function enableAnimations() {
  document.body.classList.remove("no-animation");
}

document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  if (
    path.includes("cart.html") ||
    path.includes("wishlist.html") ||
    path.includes("menu.html") ||
    path.includes("index.html")
  ) {
    disableAnimations();
  } else {
    enableAnimations();
  }
});

function animatePageTransition(callback) {
  document.body.style.opacity = 0;
  setTimeout(() => {
    callback();
    document.body.style.opacity = 1;
  }, 150);
}

function toggleHeaderVisibility(show) {
  const header = document.getElementById("site-header");
  if (header) header.style.display = show ? "flex" : "none";
}

// ======================
// RENDER PRODUCTS
// ======================
function renderProducts(list, hideHeader = false) {
  toggleHeaderVisibility(!hideHeader);
  const container = document.getElementById("product-container");
  if (!container) return;
  container.innerHTML = "";

  list.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <i class="fa fa-heart wishlist-icon ${isInWishlist(product) ? "active" : ""}"></i>
      ${product.number ? `<span class="product-number">${product.number}</span>` : ""}
      <img src="${product.image}" class="product-image" alt="${product.name}" />
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

    const img = card.querySelector(".product-image");
    img.style.cursor = "pointer";
    img.addEventListener("click", () => {
      window.open(product.link, "_blank");
    });

    container.appendChild(card);
  });
}

// ======================
// WISHLIST FUNCTIONS
// ======================
function isInWishlist(product) {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  return wishlist.find(p => p.name === product.name);
}

function toggleWishlistItem(product) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const exists = wishlist.find(p => p.name === product.name);
  if (exists) {
    wishlist = wishlist.filter(p => p.name !== product.name);
    showPopupMessage("Removed from Wishlist");
  } else {
    wishlist.push(product);
    showPopupMessage("Added to Wishlist");
  }
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

// ======================
// CART FUNCTIONS
// ======================
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (!cart.find(p => p.name === product.name)) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    showPopupMessage("Added to Cart");
  } else {
    showPopupMessage("Already in Cart");
  }
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (index > -1 && index < cart.length) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
    updateCartCount();
    showPopupMessage("Removed from Cart");
  }
}

// ======================
// CATEGORY FILTER + BACK BUTTON SUPPORT
// ======================
let currentCategory = "all";

function filterByCategory(cat) {
  currentCategory = cat;
  const filtered =
    cat === "all" ? products : products.filter(p => p.category === cat);
  animatePageTransition(() => renderProducts(filtered));

  // Update browser history
  history.pushState({ category: cat }, "", `#${cat}`);
}

// Handle back/forward button
window.onpopstate = function (event) {
  if (event.state && event.state.category) {
    const cat = event.state.category;
    const filtered =
      cat === "all" ? products : products.filter(p => p.category === cat);
    renderProducts(filtered);
  } else {
    renderProducts(products);
  }
};

// ======================
// SEARCH FILTER
// ======================
function filterProducts() {
  const val = document.getElementById("search").value.toLowerCase();
  const filtered = products.filter(
    p =>
      p.name.toLowerCase().includes(val) ||
      (p.number && p.number.toString().includes(val))
  );
  animatePageTransition(() => renderProducts(filtered));
}

// ======================
// CART COUNT & NAV
// ======================
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
  links.forEach(link => {
    if (
      link.getAttribute("href") === currentFile ||
      (currentFile === "" && link.getAttribute("href") === "index.html")
    ) {
      link.classList.add("active");
    }
  });
}

// ======================
// WISHLIST PAGE
// ======================
function renderWishlist() {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const container = document.getElementById("wishlist-products");
  if (!container) return;
  container.innerHTML = "";
  if (wishlist.length === 0) {
    container.innerHTML =
      "<p style='text-align:center; padding:20px;'>No items in wishlist.</p>";
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
    wishlist.splice(index, 1);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    renderWishlist();
    showPopupMessage("Removed from Wishlist");
  }
}

// ======================
// CART PAGE
// ======================
function renderCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cart-products");
  if (!container) return;
  container.innerHTML = "";
  if (cart.length === 0) {
    container.innerHTML =
      "<p style='text-align:center; padding:20px;'>Your cart is empty.</p>";
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

// ======================
// ON PAGE LOAD
// ======================
window.onload = () => {
  cleanLocalStorage();
  const hash = window.location.hash.replace("#", "");
  if (hash && hash !== "all") {
    filterByCategory(hash);
  } else if (document.getElementById("product-container")) {
    renderProducts(products);
  }

  if (document.getElementById("wishlist-products")) renderWishlist();
  if (document.getElementById("cart-products")) renderCart();

  updateCartCount();
  updateActiveNavLink();
};








