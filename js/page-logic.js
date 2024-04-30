// Open popup when clicking on the info-section
document.querySelector('.info-section').addEventListener('click', function(event) {
    event.stopPropagation();  // Prevent this click from propagating to the body
    document.getElementById('popup').classList.add('active');
});

document.querySelector('.info-section-two').addEventListener('click', function(event) {
    event.stopPropagation();  // Prevent this click from propagating to the body
    document.getElementById('popup').classList.add('active');
});


// Add event listener to the body to close the popup
document.body.addEventListener('click', function(event) {
    let popup = document.getElementById('popup');
    if (popup.classList.contains('active')) {
        popup.classList.remove('active');
    }
});

// Stop propagation on the popup itself to prevent the body click event from closing it when interacting with the popup
document.getElementById('popup').addEventListener('click', function(event) {
    event.stopPropagation();
});

// Close button specifically stops propagation and closes the popup
document.querySelector('.close-btn').addEventListener('click', function(event) {
    event.stopPropagation();
    document.getElementById('popup').classList.remove('active');
});
