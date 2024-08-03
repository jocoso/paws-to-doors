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

    if (response.ok) {
      await showAlert("Login successful");
      document.location.replace('/');
      
    } else {
      await showAlert("Login failed");
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


document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

// const loginFormHandler = async (event) => {
//     event.preventDefault();
  
//     const email = document.querySelector('#email-login').value.trim();
//     const password = document.querySelector('#password-login').value.trim();
  
//     if (email && password) {
//       const response = await fetch('/api/users/login', {
//         method: 'POST',
//         body: JSON.stringify({ email, password }),
//         headers: { 'Content-Type': 'application/json' },
//       });
  
//       if (response.ok) {
//         // Redirect to the homepage or profile page
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to log in.');
//       }
//     }
//   };
  
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);