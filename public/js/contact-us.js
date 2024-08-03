document.addEventListener("DOMContentLoaded", function() {
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    const submitButton = document.getElementById("submitButton");

    function updateButtonVisibility() {
        // Check if all fields are empty
        if(email.value.trim() && subject.value.trim() && message.value.trim()) {
            submitButton.style.display = "block";
        } else {
            submitButton.style.display = "none";
        }
    }

    email.addEventListener('input', updateButtonVisibility);
    subject.addEventListener('input', updateButtonVisibility);
    message.addEventListener('input', updateButtonVisibility);
})