document.addEventListener('DOMContentLoaded', function () {
    const editHotelForm = document.getElementById('editHotelForm');

    editHotelForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const searchOption = document.getElementById('searchOption').value;
        const searchTerm = document.getElementById('searchTerm').value;

        let hotelId = null;
        if (searchOption === 'hotelId') {
            hotelId = parseInt(searchTerm, 10);
        }

        const hotelData = {};

        // Check which fields are filled out and add them to hotelData
        if (document.getElementById('hotelName').value) {
            hotelData.hotelName = document.getElementById('hotelName').value;
        }
        if (document.getElementById('street').value) {
            hotelData.street = document.getElementById('street').value;
        }
        if (document.getElementById('city').value) {
            hotelData.city = document.getElementById('city').value;
        }
        if (document.getElementById('zip').value) {
            hotelData.zip = parseInt(document.getElementById('zip').value, 10);
        }
        if (document.getElementById('buildingNumber').value) {
            hotelData.buildingNumber = parseInt(document.getElementById('buildingNumber').value, 10);
        }
        if (document.getElementById('country').value) {
            hotelData.country = document.getElementById('country').value;
        }

        if (hotelId) {
            updateHotel(hotelId, hotelData);
        } else {
            alert("Please provide a valid Hotel ID to update.");
        }
    });
});

function updateHotel(hotelId, hotelData) {
    fetch(`http://localhost:8080/hotels/update/${hotelId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(hotelData)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Hotel updated successfully!');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred while updating the hotel.');
        });
}
