function selectItem(name, price) {
    localStorage.setItem("item", name);
    localStorage.setItem("price", price);
    window.location.href = "booking.html";
}

function placeOrder() {
    const username = document.getElementById("username").value;

    if(username === "") {
        alert("Please enter your name");
        return;
    }

    const order = {
        user: username,
        item: localStorage.getItem("item"),
        price: localStorage.getItem("price"),
        date: new Date().toLocaleString()
    };

    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    window.location.href = "confirmation.html";
}

function loadOrders() {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    let table = document.getElementById("ordersTable");

    orders.forEach(order => {
        table.innerHTML += `
        <tr>
            <td>${order.user}</td>
            <td>${order.item}</td>
            <td>₹${order.price}</td>
            <td>${order.date}</td>
        </tr>`;
    });
}