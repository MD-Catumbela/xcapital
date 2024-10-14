document.addEventListener('DOMContentLoaded', function () {
    var carouselElement = document.getElementById('carouselDepoimentos');
    var carousel = new bootstrap.Carousel(carouselElement, {
        interval: 5000,
        wrap: true
    });
});
