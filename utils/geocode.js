require('dotenv').config();
const axios = require('axios');

const getMapUrl = async (address) => {
  console.log(`Fetching map URL for address: ${address}`); // Debugging line
  try {
    const apiKey = process.env.OPENCAGE_API_KEY;
    const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json`, {
      params: {
        key: apiKey,
        q: address,
        no_annotations: 1
      }
    });
    const result = response.data.results[0];
    if (!result) {
      throw new Error('No results found');
    }
    const { lat, lng } = result.geometry;
    const mapUrl = `https://static-maps.yandex.ru/1.x/?ll=${lng},${lat}&size=400,300&z=14&l=map&pt=${lng},${lat},pm2rdm`;
    console.log(`Generated map URL: ${mapUrl}`); // Debugging line
    return mapUrl;
  } catch (error) {
    console.error('Error fetching geocoding data:', error);
    return null;
  }
};

module.exports = getMapUrl;


