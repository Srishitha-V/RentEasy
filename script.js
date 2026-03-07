// Navigation functions
function goToLogin(){
    window.location.href="login.html";
}

function goToItems(){
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if(isLoggedIn !== "true"){
        alert("Please login first to view items!");
        window.location.href="login.html";
        return;
    }
    window.location.href="items.html";
}

function goToHome(){
    window.location.href="index.html";
}

// Login validation
function validateLogin(event){
    event.preventDefault();
    
    const rollno = document.getElementById("rollno").value.trim();
    const password = document.getElementById("password").value;
    
    if(rollno === "" || password === ""){
        alert("Please fill in all fields!");
        return false;
    }
    
    // Simple validation - in production, this should validate against a server
    // For demo, accept any rollno with password "rent123"
    if(password === "rent123"){
        // Store login state
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("studentRollno", rollno);
        
        alert("Login successful!");
        window.location.href = "items.html";
    } else {
        alert("Invalid credentials! Password should be 'rent123'");
        return false;
    }
    
    return false;
}

// Logout function
function logout(){
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("studentRollno");
    alert("Logged out successfully!");
    window.location.href = "index.html";
}

// Booking functions
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

