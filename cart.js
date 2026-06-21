let cart = JSON.parse(localStorage.getItem('cart')) || [];
const container = document.getElementById('cartContainer');
const totalBox = document.getElementById('totalBox');

function displayCart() {
    if (cart.length === 0) {
        container.innerHTML = "<p style='text-align:center; font-size:1.2rem; padding: 20px;'>Your cart is empty.</p>";
        totalBox.innerHTML = "<h2 style='text-align:center;'>Total: ₹0</h2>";
        return;
    }

    container.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        // FIXED: Using item.qty to calculate total
        total += item.price * item.qty;

        container.innerHTML += `
            <div class="cart-item" style="display: flex; align-items: center; justify-content: space-between; background: #fff; padding: 20px; margin-bottom: 15px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                <div style="display: flex; align-items: center;">
                    <img src="${item.image}" alt="${item.product}" style="width: 90px; height: 90px; object-fit: cover; border-radius: 6px; margin-right: 20px;" onerror="this.src='https://via.placeholder.com/90'">
                    <div>
                        <h3 style="margin: 0 0 5px 0; color: #222;">${item.product}</h3>
                        <p style="margin: 0; color: #28a745; font-weight: bold;">₹${item.price}</p>
                    </div>
                </div>
                
                <div style="display: flex; align-items: center; gap: 15px;">
                    <div style="display: flex; align-items: center; background: #eee; border-radius: 4px; overflow: hidden;">
                        <button onclick="changeQuantity(${index}, -1)" style="padding: 5px 12px; background: #ddd; border: none; cursor: pointer; font-weight: bold;">-</button>
                        <span style="padding: 0 15px; font-weight: bold;">${item.qty}</span>
                        <button onclick="changeQuantity(${index}, 1)" style="padding: 5px 12px; background: #ddd; border: none; cursor: pointer; font-weight: bold;">+</button>
                    </div>
                    <button onclick="removeItem(${index})" style="background: #dc3545; color: white; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer;">Remove</button>
                </div>
            </div>
        `;
    });

    totalBox.innerHTML = `
        <div style="text-align: center; margin-top: 20px; padding-top: 15px; border-top: 2px solid #ddd;">
            <h2 style="margin-bottom: 15px;">Total: ₹${total}</h2>
            <button onclick="clearCart()" style="background: #6c757d; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; margin-right: 10px;">Clear Cart</button>
        </div>
    `;
}

window.changeQuantity = function(index, amount) {
    // FIXED: Changed item.quantity to item.qty
    cart[index].qty += amount;
    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
};

window.removeItem = function(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
};

window.clearCart = function() {
    localStorage.removeItem('cart');
    cart = [];
    displayCart();
};

displayCart();

        