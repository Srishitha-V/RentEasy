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
    let date = document.getElementById("bookingDate").value;
    let days = document.getElementById("days").value;
    let payment = document.getElementById("paymentMethod").value;

    if(name === "" || date === "" || days === "" || payment === ""){
        alert("Please fill all details!");
        return;
    }

    let item = localStorage.getItem("itemName");
    let price = localStorage.getItem("itemPrice");
    let total = days * price;

    let order = {
        name,
        item,
        date,
        days,
        payment,
        total
    };

    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    window.location.href="confirm.html";
}

/* DISPLAY ORDERS */
if(document.getElementById("ordersContainer")){

    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    let container = document.getElementById("ordersContainer");

    if(orders.length === 0){
        container.innerHTML = "<p style='text-align:center;'>No orders placed yet.</p>";
    } else {
        orders.forEach(order => {
            container.innerHTML += `
                <div class="order-card">
                    <h3>${order.item}</h3>
                    <p><strong>Name:</strong> ${order.name}</p>
                    <p><strong>Date:</strong> ${order.date}</p>
                    <p><strong>Days:</strong> ${order.days}</p>
                    <p><strong>Payment:</strong> ${order.payment}</p>
                    <p><strong>Total:</strong> ₹${order.total}</p>
                </div>
            `;
        });
    }
}