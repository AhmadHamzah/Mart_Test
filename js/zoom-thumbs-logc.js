var productImagesSwiper = new Swiper(".product-images-swiper", {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
          return current + '/' + total;
        }
      }

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

function copyToClipboard() {
    var copyText = document.getElementById("copyText").innerText;
    var textArea = document.createElement("textarea");
    textArea.value = copyText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
  }


document.querySelectorAll('.size-btn').forEach(button => {
    button.addEventListener('click', function() {
      document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
    });
  });


  function increment() {
    var value = parseInt(document.getElementById('quantity').value, 10);
    value = isNaN(value) ? 1 : value;
    value++;
    document.getElementById('quantity').value = value;
  }

  function decrement() {
    var value = parseInt(document.getElementById('quantity').value, 10);
    value = isNaN(value) ? 1 : value;
    value < 2 ? value = 1 : value--;
    document.getElementById('quantity').value = value;
  }

  
  