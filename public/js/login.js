



async function showAlert(message) {
    return new Promise((resolve) => {
      const alertBox = document.getElementById('customAlert');
      const alertMessage = document.getElementById('alertMessage');
  
      if (alertBox && alertMessage) {
        alertMessage.textContent = message;
        alertBox.style.display = 'block';
  
        window.closeAlert = () => {
          alertBox.style.display = 'none';
          resolve();
        };
      } else {
        console.error('Alert elements not found');
        resolve();
      }
    });
  }
  
  const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      const result = await response.json();
      console.log(result); // Log the response
  
      if (response.ok) {
        await showAlert("Login successful");
        document.location.replace('/');
      } else {
        await showAlert("Login failed: " + (result.message || 'Unknown error'));
      }
    }
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
      loginForm.addEventListener('submit', loginFormHandler);
    }
  });
  