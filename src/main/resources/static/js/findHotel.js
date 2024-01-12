document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const hotelId = document.getElementById('hotelId').value;
    fetch(`http://localhost:8080/hotels/find/${hotelId}`)
        .then(response => response.json())
        .then(data => showHotelDetails(data))
        .catch(error => console.error('Error:', error));
});

function showHotelDetails(hotel) {
    document.getElementById('hotelName').textContent = hotel.hotelName;
    document.getElementById('street').textContent = hotel.street;
    document.getElementById('city').textContent = hotel.city;
    document.getElementById('country').textContent = hotel.country;
    document.getElementById('zip').textContent = hotel.zip;
    document.getElementById('rooms').textContent = hotel.rooms.length;
    document.getElementById('hotelModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('hotelModal').style.display = 'none';
}
