// inside backend/server.js
const orders = [];

app.post('/api/orders', (req, res) => {
    const { items, total } = req.body;
    if (!items || items.length === 0) {
        return res.status(400).json({ message: "Cart cannot be empty" });
    }

    const orderId = `ANUTRK-${Math.floor(100000 + Math.random() * 900000)}`;
    orders.push({ orderId, items, total, status: "Processing" });

    res.status(201).json({ message: "Your order has been recorded at Anuhya Hub!", orderId });
});