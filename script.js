function login(){
    window.location.href="items.html";
}

function bookItem(name, price){
    localStorage.setItem("itemName", name);
    localStorage.setItem("itemPrice", price);
    window.location.href="booking.html";
}

if(document.getElementById("itemName")){
    document.getElementById("itemName").innerText =
        "Item: " + localStorage.getItem("itemName");

    document.getElementById("itemPrice").innerText =
        "Price per day: ₹" + localStorage.getItem("itemPrice");
}

function confirmBooking(){
    let name = document.getElementById("customerName").value;
    let days = document.getElementById("days").value;
    let payment = document.getElementById("paymentMethod").value;
    let item = localStorage.getItem("itemName");
    let price = localStorage.getItem("itemPrice");

    let total = days * price;

    let order = {
        name,
        item,
        days,
        payment,
        total
    };

    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    window.location.href="confirm.html";
}

if(document.getElementById("bookingList")){
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    let list = document.getElementById("bookingList");

    orders.forEach(order => {
        list.innerHTML += `
            <div class="order-card">
                <h3>${order.name}</h3>
                <p>Item: ${order.item}</p>
                <p>Days: ${order.days}</p>
                <p>Payment: ${order.payment}</p>
                <p>Total: ₹${order.total}</p>
            </div>
        `;
    });
}