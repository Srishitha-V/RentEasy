function goToItems(){
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

    if(name==="" || date==="" || days==="" || payment===""){
        alert("Please fill all details!");
        return;
    }

    document.getElementById("successMessage").innerText =
        "🎉 Order Successful! Thanks for booking!";
}