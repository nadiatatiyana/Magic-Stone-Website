document.addEventListener("DOMContentLoaded", function() {
    var emailInput = document.getElementById("emailInput");
    var sendButton = document.querySelector(".send-button"); // Corrected selector for the send button

    // Add event listener to the send button
    sendButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent form submission

        if (emailInput.value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
            // Display an alert if the email is valid
            alert("Thank you for providing your email!");
        }
    });
});

