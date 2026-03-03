let selectedItem = "";
let selectedPrice = 0;

function rentItem(item, price) {
    selectedItem = item;
    selectedPrice = price;

    localStorage.setItem("item", item);
    localStorage.setItem("price", price);

    window.location.href = "booking.html";
}

window.onload = function () {
    if (document.getElementById("item")) {
        document.getElementById("item").value = localStorage.getItem("item");
    }

    if (document.getElementById("bookingList")) {
        let data = JSON.parse(localStorage.getItem("bookings")) || [];
        let list = document.getElementById("bookingList");

        data.forEach(b => {
            list.innerHTML += `
            <div class="card">
                <h3>${b.item}</h3>
                <p>Days: ${b.days}</p>
                <p>Total: ₹${b.total}</p>
                <p>Return Date: ${b.date}</p>
            </div>`;
        });
    }

    if (document.getElementById("details")) {
        document.getElementById("details").innerHTML =
            localStorage.getItem("confirmation");
    }
};

function confirmBooking() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let item = localStorage.getItem("item");
    let price = localStorage.getItem("price");
    let days = document.getElementById("days").value;
    let date = document.getElementById("date").value;

    let total = price * days;
    let orderId = Math.floor(Math.random() * 10000);

    let bookingData = JSON.parse(localStorage.getItem("bookings")) || [];

    bookingData.push({
        item: item,
        days: days,
        total: total,
        date: date
    });

    localStorage.setItem("bookings", JSON.stringify(bookingData));

    localStorage.setItem("confirmation",
        `Order ID: ${orderId}<br>
        Name: ${name}<br>
        Item: ${item}<br>
        Total Price: ₹${total}`
    );

    window.location.href = "confirmation.html";

    return false;
}