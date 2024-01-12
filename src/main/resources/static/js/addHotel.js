document.getElementById('hotelForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const hotelData = {
        hotelName: document.getElementById('hotelName').value,
        street: document.getElementById('street').value,
        city: document.getElementById('city').value,
        zip: parseInt(document.getElementById('zip').value),
        buildingNumber: parseInt(document.getElementById('buildingNumber').value),
        country: document.getElementById('country').value
    };

    fetch('http://localhost:8080/hotels/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(hotelData),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Hotel created successfully!');
            // Reset form
            document.getElementById('hotelForm').reset();
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Error creating hotel');
        });
});