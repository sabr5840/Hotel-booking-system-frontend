document.addEventListener('DOMContentLoaded', function () {
    const deleteForm = document.getElementById('deleteHotelForm');
    const confirmationModal = document.getElementById('confirmationModal');
    const deleteButton = document.getElementById('deleteButton');
    const cancelButton = document.getElementById('cancelButton');
    const searchTermInput = document.getElementById('searchTerm');
    const searchOptionSelect = document.getElementById('searchOption');

    deleteForm.addEventListener('submit', function (event) {
        event.preventDefault();
        confirmationModal.style.display = 'block';
    });

    cancelButton.addEventListener('click', function () {
        confirmationModal.style.display = 'none';
    });

    deleteButton.addEventListener('click', function () {
        confirmationModal.style.display = 'none';
        deleteHotel();
    });

    function deleteHotel() {
        const searchTerm = searchTermInput.value;
        const searchOption = searchOptionSelect.value;
        let url = '';

        if (searchOption === 'hotelId') {
            url = `http://localhost:8080/hotels/delete/${searchTerm}`;
        } else if (searchOption === 'hotelName') {
            alert('Use hotel id for delteing');
            return;
        }

        fetch(url, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    return response.text();
                }
                throw new Error('something went wrong, when trying to delete');
            })
            .then(() => {
                alert('Hotel deleted');
                searchTermInput.value = '';
            })
            .catch(error => {
                alert(error.message);
            });
    }
});
