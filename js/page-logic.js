let isPopupOpen = false;

function togglePopup() {
    let popup = document.getElementById('popup');
    let overlay = document.getElementById('overlay');
    if (!isPopupOpen) {
        popup.classList.add('active');
        overlay.classList.add('active'); // Show overlay
        isPopupOpen = true;
    } else {
        popup.classList.remove('active');
        overlay.classList.remove('active'); // Hide overlay
        isPopupOpen = false;
    }
}

// Open popup when clicking on either info section
document.querySelector('.info-section').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent this click from propagating to the body
    togglePopup();
});

document.querySelector('.info-section-two').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent this click from propagating to the body
    togglePopup();
});

// Add event listener to the overlay to close the popup
document.getElementById('overlay').addEventListener('click', function() {
    togglePopup();
});

// Stop propagation on the popup itself to prevent the overlay click event from closing it when interacting with the popup
document.getElementById('popup').addEventListener('click', function(event) {
    event.stopPropagation();
});

// Close button specifically stops propagation and closes the popup
document.querySelector('.close-btn').addEventListener('click', function(event) {
    event.stopPropagation();
    togglePopup();
});





let isSharePopupOpen = false;

function toggleSharePopup() {
    let sharePopup = document.getElementById('share-popup');
    let overlay = document.getElementById('share-overlay');
    
    if (!isSharePopupOpen) {
        sharePopup.classList.add('active');
        overlay.classList.add('active'); 
        isSharePopupOpen = true;
    } else {
        sharePopup.classList.remove('active');
        overlay.classList.remove('active'); 
        isSharePopupOpen = false;
    }
}


document.querySelector('.product-share-icon').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent this click from propagating to the body
    toggleSharePopup();
});


document.getElementById('share-overlay').addEventListener('click', function() {
    toggleSharePopup();
});

document.getElementById('share-popup').addEventListener('click', function(event) {
    event.stopPropagation();
});

document.querySelector('.share-close-btn').addEventListener('click', function(event) {
    event.stopPropagation();
    toggleSharePopup();
});


