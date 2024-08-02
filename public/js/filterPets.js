// filter pet cards displayed on the webpage based on the type of pet (Dog or Cat) when the respective button is clicked (through button id)
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