function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartCount() {
    let cart = getCart();
    document.getElementById("cartCount").innerText = cart.length;
}

updateCartCount();

function addToCart(product, price, image) {
    let cart = getCart();

    let existing = cart.find(item => item.product === product);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({
            product,
            price,
            image,
            qty: 1
        });
    }

    saveCart(cart);
    updateCartCount();

    alert(product + " added ✔");
}
async function loadProducts() {
    try {
        let res = await fetch("http://localhost:5000/products");
        let products = await res.json();

        let container = document.querySelector(".products");
        container.innerHTML = "";

        products.forEach(p => {
            container.innerHTML += `
                <div class="product">
                    <img src="${p.image}" width="200">

                    <h2>${p.name}</h2>

                    <p>₹${p.price}</p>

                    <button onclick="addToCart('${p.name}',${p.price},'${p.image}')">
                        Add to Cart
                    </button>
                </div>
            `;
        });

    } catch (err) {
        console.log("Error:", err);
    }
}

loadProducts();