document.getElementById('donation-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const amount = document.getElementById('amount').value;

  try {
    const response = await fetch('/api/donate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, amount }),
    });

    if (response.ok) {
      alert('Donation received. Thank you!');
      document.getElementById('donation-form').reset();
    } else {
      alert('Failed to submit donation.');
    }
  } catch (err) {
    console.error('Error:', err);
  }
});
