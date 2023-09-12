// JavaScript code for displaying car details
function viewDetails(carId) {
    const carDetails = document.getElementById('car-details');
    carDetails.innerHTML = `
        <h2>Car Model {carId} Details</h2>
        <p>Engine: 2.0L Turbocharged</p>
        <p>Transmission: Automatic</p>
        <p>Features: Leather Seats, Navigation, Sunroof</p>
        <button onclick="closeDetails()">Close</button>
    `;
    carDetails.classList.remove('hidden');
}

function closeDetails() {
    const carDetails = document.getElementById('car-details');
    carDetails.classList.add('hidden');
}
