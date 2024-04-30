document.querySelector('.info-section').addEventListener('click', function() {
    document.getElementById('popup').classList.add('active');
});

document.getElementById('popup').addEventListener('touchstart', handleTouchStart, false);        
document.getElementById('popup').addEventListener('touchmove', handleTouchMove, false);

var yDown = null; 

function handleTouchStart(evt) {
    const firstTouch = evt.touches[0];                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt) {
    if (!yDown) {
        return;
    }

    var yUp = evt.touches[0].clientY;
    var yDiff = yDown - yUp;

    if (yDiff > 0) {
        /* Swipe Down */
        document.getElementById('popup').classList.remove('active');
    }

    /* Reset values */
    yDown = null;                                             
};
