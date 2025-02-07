let currentSlide = 0;
function moveSlide(step)
{
    const slides = document.querySelectorAll('.slide');
    const slider = document.querySelector('.slider')
    currentSlide = (currentSlide + step + slides.length) % slides.length;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}