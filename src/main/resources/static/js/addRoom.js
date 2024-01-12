document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('roomForm');
    var finishButton = document.getElementById('finishAdding');

    var submitForm = function(redirectAfterSubmission) {
        var hotelId = sessionStorage.getItem('recentHotelId');
        var roomData = {
            hotelId: hotelId,
            roomNumber: document.getElementById('roomNumber').value,
            numberOfBeds: document.getElementById('numberOfBeds').value,
            floor: document.getElementById('floor').value,
            roomType: document.getElementById('roomType').value,
            pricePerNight: document.getElementById('pricePerNight').value
        };

        fetch('http://localhost:8080/hotels/' + hotelId + '/rooms', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(roomData),
        })
            .then(response => response.json())
            .then(data => {
                alert('Room added successfully');
                if (!redirectAfterSubmission) {
                    form.reset(); // clean the slate
                } else {
                    window.location.href = 'index.html';
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Error adding room');
            });
    };

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        submitForm(false);
    });

    finishButton.addEventListener('click', function(e) {
        e.preventDefault();
        submitForm(true);
    });
});
