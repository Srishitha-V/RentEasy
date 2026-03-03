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

    let item = localStorage.getItem("itemName");
    let price = localStorage.getItem("itemPrice");
    let total = days * price;

    let order = { name, item, date, days, payment, total };

    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    alert("Booking Successful!");
    window.location.href="items.html";   // FIXED
}