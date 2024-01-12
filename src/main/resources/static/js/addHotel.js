document.getElementById('hotelForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var hotelData = {
        hotelName: document.getElementById('hotelName').value,
        street: document.getElementById('street').value,
        city: document.getElementById('city').value,
        zip: parseInt(document.getElementById('zip').value),
        buildingNumber: parseInt(document.getElementById('buildingNumber').value),
        country: document.getElementById('country').value
    };

    fetch('http://localhost:8080/hotels/create', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(hotelData),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success - now you and add rooms to hotel', data);
            sessionStorage.setItem('recentHotelId', data.id); // save hotel-ID in session storage
            window.location.href = 'addRoom.html';
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Error adding hotel');
        });
});
