const Pet = require('../models/Pet');

const petData = [
  {
    name: 'Buddy',
    type: 'Dog',
    breed: 'Golden Retriever',
    age: 3,
    health_status: 'Healthy',
    description: 'Friendly and energetic.',
    location: 'New York, NY',
    user_id: 1,
    image_url: 'https://example.com/images/dogs/golden_retriever.jpg',
  },
  {
    name: 'Bella',
    type: 'Dog',
    breed: 'Labrador Retriever',
    age: 2,
    health_status: 'Healthy',
    description: 'Loves to play fetch.',
    location: 'Los Angeles, CA',
    user_id: 2,
    image_url: 'https://example.com/images/dogs/labrador_retriever.jpg',
  },
  // Add more pets as needed
];

const seedPets = async () => {
  await Pet.bulkCreate(petData);
};

module.exports = seedPets;
