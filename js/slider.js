var currentSlide = 0;
var totalSlides = document.querySelectorAll('#z-slide-figure img').length;
var slideFigure = document.getElementById('z-slide-figure');

document.getElementById('prev').addEventListener('click', prevSlide);
document.getElementById('next').addEventListener('click', nextSlide);

// Rest of your JavaScript code


function showSlide(index) {
    var newLeftValue = (-index * 100) + '%';
    slideFigure.style.left = newLeftValue;
}

function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
    } else {
        // Loop back to the first slide
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        // Loop back to the last slide
        currentSlide = totalSlides - 1;
    }
    showSlide(currentSlide);
}