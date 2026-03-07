function goToItems(){
    window.location.href="items.html";
}

function goToLogin(){
    window.location.href="login.html";
}

function logout(){
    window.location.href="index.html";
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

function toggleTimings(){
    let days = document.getElementById("days").value;
    let timingsSection = document.getElementById("timingsSection");
    
    if(days > 3){
        timingsSection.style.display = "block";
    } else {
        timingsSection.style.display = "none";
    }
}

function validateLogin(event){
    event.preventDefault();
    let rollno = document.getElementById("rollno").value;
    let password = document.getElementById("password").value;
    
    if(rollno && password){
        window.location.href = "items.html";
    }
}


