document.addEventListener("DOMContentLoaded", function() {
    let steps = document.querySelectorAll(".tracking-step");
    
    // Simulated order progress (Change this number to update status)
    let currentStep = 2; // 0 = Order Placed, 1 = Shipped, 2 = Out for Delivery, 3 = Delivered

    for (let i = 0; i <= currentStep; i++) {
        steps[i].classList.add("completed");
    }
});
