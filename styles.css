body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background: black;
    text-align: center;
    animation: fadeIn 1s ease-in-out;
    color: white;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

/* =====================
   HEADER
   ===================== */
header {
    padding: 15px;
    background: black;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.logo {
    width: 60px;
    height: auto;
    margin-bottom: 10px;
}
header h1 {
    margin: 5px 0;
    font-size: 22px;
    text-align: center;
}

/* =====================
   BANNER
   ===================== */
header h1 {
  margin-bottom: 5px;
}
.banner h4 {
  margin-top: 0;
  margin-bottom: 10px;
  font-weight: bold;  
}
.cta-btn {
    padding: 12px 25px;
    border: none;
    border-radius: 30px;
    background: #ff7e5f;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.3s;
    margin-top: 10px;
}
.cta-btn:hover {
    background: #feb47b;
    transform: scale(1.1);
}

/* =====================
   SEARCH BAR
   ===================== */
.search-container {
    position: sticky;
    top: 0;
    background: black;
    z-index: 1000;
    padding: 10px;
}
#search {
    width: 90%;
    max-width: 500px;
    padding: 10px;
    font-size: 16px;
    border: 2px solid #555;
    border-radius: 5px;
    outline: none;
    background: #111;
    color: white;
    transition: border-color 0.3s, box-shadow 0.3s, transform 0.2s;
}
#search:focus {
    border-color: #ff7e5f;
    box-shadow: 0 0 8px rgba(255, 126, 95, 0.6);
    transform: scale(1.02);
}
#search::placeholder {
    color: #aaa;
    font-style: italic;
}

/* =====================
   CATEGORIES
   ===================== */
.categories {
    display: flex;
    flex-wrap: wrap;
    margin: 15px 0;
    gap: 10px;
    padding: 0 10px;

    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
}
.categories::-webkit-scrollbar {
    display: none;
}
.categories button {
    padding: 8px 16px;
    border: none;
    outline: none;
    border-radius: 20px;
    background: #fbff4d;
    color: black;
    font-size: 14px;
    cursor: pointer;
    transition: 0.3s;
}
.categories button:hover {
    background: #00ffe1;
    transform: scale(1.05);
}

/* =====================
   SUBCATEGORIES
   ===================== */
#subcategory-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 15px 0;
    gap: 8px;
    padding: 0 10px;

    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
}
#subcategory-container::-webkit-scrollbar {
    display: none;
}
#subcategory-container button {
    padding: 6px 14px;
    border: none;
    border-radius: 15px;
    background: linear-gradient(135deg, #fff176, #ffd54f);
    color: black;
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
}
#subcategory-container button:hover {
    transform: scale(1.1) translateY(-3px);
    box-shadow: 0 6px 12px rgba(255, 213, 79, 0.4);
}

/* =====================
   PRODUCT GRID
   ===================== */
.product-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: 10px;
    max-width: 1450px;
    margin: auto;
}

.card {
    background: white;
    padding: 15px;
    border-radius: 15px;
    text-align: center;
    color: black;
    box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    transition: transform 0.3s, box-shadow 0.3s;
    position: relative; /* needed for product-number */
}
.card:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0,0,0,0.25);
}
.card img {
    width: 100%;
    max-height: 250px;
    object-fit: contain;
    border-radius: 8px;
    margin-bottom: 10px;
}
.product-name {
    margin-top: 8px;
    font-size: 15px;
    font-weight: bold;
}

/* =====================
   PRODUCT NUMBER TAG
   ===================== */
.product-number {
    position: absolute;
    top: 8px;
    left: 8px;
    background-color: #ffcc00;
    color: black;
    font-weight: bold;
    padding: 4px 10px;
    border-radius: 6px;
    font-size: 14px;
    z-index: 10;
}

/* =====================
   BUY NOW BUTTON
   ===================== */
.buy-btn {
    margin-top: 10px;
    padding: 8px 16px;
    border: none;
    border-radius: 8px;
    background: #ffcc00;
    color: black;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s, transform 0.2s;
}
.buy-btn:hover {
    background: #ffaa00;
    transform: scale(1.05);
}

/* =====================
   WHATSAPP BUTTON
   ===================== */
.whatsapp-btn {
    position: fixed;
    top: 15px;
    right: 20px;
    background-color: #25D366;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 6px rgba(0,0,0,0.3);
    z-index: 1000;
    transition: transform 0.3s ease;
}
.whatsapp-btn img {
    width: 35px;
    height: 35px;
}
.whatsapp-btn:hover {
    transform: scale(1.1);
}

/* =====================
   RESPONSIVE
   ===================== */
@media (max-width: 1024px) {
    .product-grid {
        grid-template-columns: repeat(3, 1fr);
    }
    header h1 {
        font-size: 20px;
    }
}
@media (max-width: 768px) {
    header {
        padding: 10px;
    }
    header h1 {
        font-size: 18px;
    }
    .banner h1 {
        font-size: 16px;
    }
    #search {
        width: 95%;
        font-size: 14px;
    }
    .categories, #subcategory-container {
        flex-wrap: nowrap;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        justify-content: flex-start;
    }
    .categories button, #subcategory-container button {
        flex: 0 0 auto;
        font-size: 12px;
        padding: 6px 12px;
    }
    .product-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
    }
    .card img {
        max-height: 300px; /* bigger images on mobile */
    }
    .product-number {
        font-size: 16px;
        padding: 5px 12px;
    }
}
@media (max-width: 480px) {
    .product-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    .card img {
        max-height: 350px; /* even bigger on small phones */
    }
    .buy-btn {
        padding: 6px 12px;
        font-size: 12px;
    }
    .cta-btn {
        padding: 10px 20px;
        font-size: 14px;
    }
}
