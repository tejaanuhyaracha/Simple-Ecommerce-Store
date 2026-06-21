let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
    const el = document.getElementById("cartCount");
    if (el) {
        el.innerText = cart.length;
    }
}

updateCartCount();

function addToCart(product, price) {
    cart.push({ product, price });

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    console.log(cart);

    alert(product + " added to cart ✔");
}