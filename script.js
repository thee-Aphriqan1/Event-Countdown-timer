let eventDate = new Date('2024/08/24 22:24:00');

function clockUpdate() {
    let currentDate = new Date();

    // Calculate the difference in time
    let timeDifference = eventDate - currentDate; // in milliseconds
    // console.log(timeDifference);

    // If the event date is in the past, stop the timer
    if (timeDifference <= 0) {
        clearInterval(timerInterval);
        timeDifference = 0; // Reset to 0 to avoid negative values
    }

    // Convert the time difference into days, hours, minutes, and seconds
    let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Update the HTML elements
    document.getElementById('days').innerHTML = `${days}`;
    document.getElementById('hours').innerHTML = `${hours}`;
    document.getElementById('minutes').innerHTML = `${minutes}`;
    document.getElementById('seconds').innerHTML = `${seconds}`;
}

// Update the timer every second
let timerInterval = setInterval(clockUpdate, 1000);

// Call clockUpdate initially to avoid delay
clockUpdate();
