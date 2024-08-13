const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#username-signup').value.trim(); // Keeping the model and variable names consistent
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users/', { // Calling localhost:3001/api/users/...
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    
    if (response.ok) {
      await showAlert("Signup successful");
      document.location.replace('/');
    } else {

      await showAlert("Signup failed"); // Strange quiet error where the password will not be accepted sometimes for reasons...
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

