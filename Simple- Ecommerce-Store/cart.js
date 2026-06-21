let cart = JSON.parse(localStorage.getItem("cart")) || [];

function loadCart() {
    let container = document.getElementById("cartItems");
    let total = 0;

    container.innerHTML = "";

    cart.forEach((item, index) => {
        total += item.price;

        container.innerHTML += `
            <div class="product">
                <h3>${item.product}</h3>
                <p>₹${item.price}</p>
                <button onclick="removeItem(${index})">Remove</button>
            </div>
            <hr>
        `;
    });

    document.getElementById("total").innerText = "Total: ₹" + total;
}

function removeItem(index) {
    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    loadCart();
}

function checkout() {
    alert("Order placed successfully ✔");

    localStorage.removeItem("cart");

    cart = [];

    loadCart();
}

loadCart();