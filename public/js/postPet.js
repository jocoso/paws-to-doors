const postPetFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#pet-name').value.trim();
    const type = document.querySelector('#pet-type').value.trim();
    const breed = document.querySelector('#pet-breed').value.trim();
    const age = document.querySelector('#pet-age').value.trim();
    const health_status = document.querySelector('#pet-health-status').value.trim();
    const description = document.querySelector('#pet-description').value.trim();
    const location = document.querySelector('#pet-location').value.trim();
    const image_url = document.querySelector('#pet-image-url').value.trim();
  
    if (name && type && breed && age && health_status && description && location && image_url) {
      const response = await fetch('/api/pets', {
        method: 'POST',
        body: JSON.stringify({ name, type, breed, age, health_status, description, location, image_url }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to post pet.');
      }
    }
};
  
document.querySelector('.post-pet-form').addEventListener('submit', postPetFormHandler);

  