const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users/', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      await showAlert("Signup successful");
      document.location.replace('/');
    } else {
      await showAlert("Signup failed");
    }
  }
};

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

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);

