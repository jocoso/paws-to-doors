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


const ticketFormHandler = async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    const response = await fetch('/api/tickets', {
        method: 'POST',
        body: JSON.stringify({ email, subject, message }),
        headers: { 'Content-Type': 'application/json' },
    });

    if(response.ok) {
        await showAlert("Ticket Submitted Successfully");
        document.location.replace('/contact');
    } else {
        await showAlert("Failed to Submit Ticket");
    }
}


function showAlert(message) {
    return new Promise((resolve) => {
        const alertBox = document.getElementById('customAlert');
        document.getElementById('alertMessage').textContent = message;
        alertBox.style.display = 'block';

        window.closeAlert = () => {
            alertBox.style.display = 'none';
            resolve();
        };
    });
}


document
    .querySelector('.ticket-submission-form')
    .addEventListener('submit', ticketFormHandler);