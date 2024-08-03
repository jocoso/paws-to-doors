document.addEventListener('DOMContentLoaded', () => {
    // Display all pets by default
    document.querySelectorAll('.pet-card').forEach(card => {
      card.style.display = 'block';
    });
  
    // Event listeners for filtering pets by type
    document.getElementById('show-dogs').addEventListener('click', () => {
      document.querySelectorAll('.pet-card').forEach(card => {
        if (card.dataset.type === 'Dog') {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  
    document.getElementById('show-cats').addEventListener('click', () => {
      document.querySelectorAll('.pet-card').forEach(card => {
        if (card.dataset.type === 'Cat') {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  
    // Event listener for viewing pet details
    document.querySelectorAll('.pet-card').forEach(card => {
      card.addEventListener('click', () => {
        const petId = card.dataset.id;
        document.location.replace(`/pet/${petId}`);
      });
    });
  
    // Event listener for adopting a pet
    document.querySelectorAll('.adopt-button').forEach(button => {
      button.addEventListener('click', async (event) => {
        event.stopPropagation();
        const petId = button.dataset.id;
  
        if (button.dataset.logged_in === 'true') {
          try {
            const response = await fetch(`/api/pets/adopt/${petId}`, {
              method: 'POST',
            });
  
            if (response.ok) {
              alert('Pet adopted successfully!');
              document.location.replace('/profile');
            } else {
              alert('Failed to adopt pet.');
            }
          } catch (err) {
            console.error(err);
          }
        } else {
          document.location.replace('/login');
        }
      });
    });
  });
  
  
