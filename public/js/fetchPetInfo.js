const axios = require('axios');

const fetchPetInfo = async (url, apiKey) => {
    try {
        const response = await fetch(url, {
            headers: { 'x-api-key': apiKey },
        });
        const data = await response.joson();
        return data;
    } catch (error) {
        console.error('Error fetching pet information:', error);
        return null;
    }
};

//Display Dog breeds
const displayDogBreeds = async () => {
    const dogBreeds = await fetchPetInfo('https://api.thedogapi.com/v1/breeds', process.env.THE_DOG_API_KEY);
    if(dogBreeds) {
        const breedList = document.querySelector('.breed-list');
        breedList.innerHTML = '';
        dogBreeds.forEach(breed => {
            const breedCard = document.createElement('div');
            breedCard.classList.add('breed-card');
            breedCard.innerHTML = `
              <img src="${breed.image.url}" alt="${breed.name}">
              <h3>${breed.name}</h3>
              <p>${breed.description}</p>
            `;
            breedList.appendChild(breedCard);
        });
    }
};

//Display Cat breeds
const displayCatBreeds = async () => {
    const catBreeds = await fetchPetInfo('https://api.thecatapi.com/v1/breeds', process.env.THE_CAT_API_KEY);
    if (catBreeds) {
        const breedList = documnt.querySelector('.breed-list');
        breedList.innerHTML = '';
        catBreeds.forEach(breed => {
            const breedCard = document.createElement('div');
            breedCard.classList.add('breed-card');
            breedCard.innerHTML = `
              <img src="${breed.image.url}" alt="${breed.name}">
              <h3>${breed.name}</h3>
              <p>${breed.description}</p>
            `;
            breedList.appendChild(breedCard);
        });
    }
};

// Call functions
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.breed-list')) {
        const breedType = document.querySelector('.breed-list').dataset.type;
        if (breedType === 'dog') {
            displayDogBreeds();
        } else if (breedType === 'cat') {
            displayCatBreeds();
        }
    }
});
