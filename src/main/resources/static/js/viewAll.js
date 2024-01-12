document.addEventListener('DOMContentLoaded', function() {
    fetchHotels();
});

let currentPage = 0;

document.getElementById('prevButton').addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        fetchHotels(currentPage);
    }
});

document.getElementById('nextButton').addEventListener('click', () => {
    currentPage++;
    fetchHotels(currentPage);
});

async function fetchHotels(page = 0, size = 10) {
    try {
        const response = await fetch(`http://localhost:8080/hotels/all?page=${page}&size=${size}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const pageData = await response.json();
        updateTableWithHotels(pageData.content); // Assuming the data is in a 'content' array
    } catch (error) {
        console.error('Error fetching hotels:', error);
    }
}

function updateTableWithHotels(hotels) {
    const tableBody = document.getElementById('hotelTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    hotels.forEach(hotel => {
        let row = tableBody.insertRow();
        row.insertCell(0).innerHTML = hotel.id;
        row.insertCell(1).innerHTML = hotel.hotelName;
        row.insertCell(2).innerHTML = hotel.street;
        row.insertCell(3).innerHTML = hotel.city;
        row.insertCell(4).innerHTML = hotel.zip;
        row.insertCell(5).innerHTML = hotel.buildingNumber;
        row.insertCell(6).innerHTML = hotel.country;
    });
}
