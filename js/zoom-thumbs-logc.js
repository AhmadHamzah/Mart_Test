var productImagesSwiper = new Swiper(".product-images-swiper", {
    loop: false,
    pagination: {
        el: ".swiper-pagination",
    },
    slidesPerView: "auto",
});


var zoomableSwiperContainer = document.getElementById("product-images-zoomable-swiper-container");

productImagesSwiper.on('click', function () {
    let slideIndex = this.realIndex;
    zoomableSwiperContainer.style.display = "block";

    var swiperImage = document.querySelectorAll('.thumbs-swiper .swiper-slide img')[slideIndex];


    changeMainImage(swiperImage.src, swiperImage)
});

var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    closeZoomableSwiperContainer()
}

document.getElementById("product-images-zoomable-swiper-container").addEventListener("click", function (event) {
    if (event.target === this) {
        closeZoomableSwiperContainer()
    }
});

function closeZoomableSwiperContainer() {
    zoomableSwiperContainer.style.display = "none";

    var zoomableSwiperImage = document.querySelectorAll('.product-images-zoomable-swiper .swiper-slide img')[0];
    zoomableSwiperImage.src = '';

    document.querySelectorAll('.thumbs-swiper .swiper-slide').forEach(function (slide) {
        slide.classList.remove('thumb-swiper-slide-active');
    });
}
function changeMainImage(src, clickedElement) {

    var galleryTop1 = new Swiper(".product-images-zoomable-swiper", {
        zoom: true,
        allowTouchMove: false,
        simulateTouch: false, // Disable mouse "touch" simulation
        noSwiping: true, //
    });
    
    galleryTop1.zoom.out();

    changeZoomableSwiperContainerImageSrc(src)

    document.querySelectorAll('.thumbs-swiper .swiper-slide').forEach(function (slide) {
        slide.classList.remove('thumb-swiper-slide-active');
    });

    if (clickedElement.parentElement) {
        clickedElement.parentElement.classList.add('thumb-swiper-slide-active');
    }
}

function changeZoomableSwiperContainerImageSrc(src) {
    var zoomableSwiperImage = document.querySelectorAll('.product-images-zoomable-swiper .swiper-slide img')[0];
    zoomableSwiperImage.src = src
}

