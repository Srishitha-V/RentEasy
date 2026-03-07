function goToItems(){
    window.location.href="items.html";
}

function checkAndGoToItems(){
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if(!isLoggedIn){
        alert("Please login first to view items!");
        window.location.href = "login.html";
    } else {
        window.location.href = "items.html";
    }
}

function goToLogin(){
    window.location.href="login.html";
}

function logout(){
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userRollNo");
    window.location.href="login.html";
}

function bookItem(name, price){
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    
    if(!isLoggedIn){
        alert("Please login first to book an item!");
        window.location.href = "login.html";
        return;
    }
    
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
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    
    if(!isLoggedIn){
        alert("Please login first to confirm your booking!");
        window.location.href = "login.html";
        return;
    }

    let name = document.getElementById("customerName").value;
    let date = document.getElementById("bookingDate").value;
    let days = document.getElementById("days").value;
    let payment = document.getElementById("paymentMethod").value;

    if(name==="" || date==="" || days==="" || payment===""){
        alert("Please fill all details!");
        return;
    }

// Check if timing section is visible (when days = 1, 2 or 3)
    let timingsSection = document.getElementById("timingsSection");
    if(timingsSection && timingsSection.style.display !== "none"){
        let startTime = document.getElementById("startTime").value;
        let endTime = document.getElementById("endTime").value;
        
        if(startTime === "" || endTime === ""){
            alert("Please fill in both start time and end time!");
            return;
        }
    }

    document.getElementById("successMessage").innerText = 
        "🎉 Order Successful! Thanks for booking!";
}

function toggleTimings(){
    let days = document.getElementById("days").value;
    let timingsSection = document.getElementById("timingsSection");
    
    // Show timing section for 1-3 days (timings become mandatory)
    if(days >= 1 && days <= 3){
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
        // Set login flag
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userRollNo", rollno);
        window.location.href = "items.html";
    }
}

// Set up validations when page loads
document.addEventListener("DOMContentLoaded", function() {
    
    // Validate days input - max 10
    const daysInput = document.getElementById("days");
    if(daysInput){
        daysInput.addEventListener("input", function() {
            let days = parseInt(this.value);
            if(days > 10){
                alert("Maximum allowed days is 10. Please enter a value between 1 and 10.");
                this.value = 10;
            }
            if(days < 1 || isNaN(days)){
                this.value = "";
            }
            toggleTimings();
        });
    }
    
    // Validate date - cannot be in the past
    const dateInput = document.getElementById("bookingDate");
    if(dateInput){
        // Set min date to today
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
        
        dateInput.addEventListener("change", function() {
            const selectedDate = new Date(this.value);
            const todayDate = new Date();
            todayDate.setHours(0,0,0,0);
            
            if(selectedDate < todayDate){
                alert("You cannot select a past date. Please select today or a future date.");
                this.value = "";
            }
        });
    }
});
