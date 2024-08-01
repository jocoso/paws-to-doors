// it runs only after the entire DOM has been loaded and is ready to be manipulated
document.addEventListener('DOMContentLoaded', () => {
    const latitude = document.querySelector('#pet-latitude').value;
    const longitude = document.querySelector('#pet-longitude').value;

    if (latitude && longitude) {
        // Generating the Static Map URL
        const mapUrl = `https://api.opencagedata.com/geocode/v1/staticmap?key=${process.env.OPENCAGE_API_KEY}&q=${latitude}+${longitude}&zoom=14&size=600x400`;
        // Displaying the Static Map Image
        const mapContainer = document.getElementById('map');
        mapContainer.innerHTML = `<img src="${mapUrl}" alt="Map showing location of the pet">`;
    }
});