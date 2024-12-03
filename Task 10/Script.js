let currentSlide = 0;
function moveSlide(step){
    const slides = document.querySelectorAll('.slide');
    const slider = document.querySelector('.slider')
    currentSlide += step;
    if(currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}