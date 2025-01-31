const image = document.getElementById('toggleImage');
const button = document.getElementById('toggleButton');

let originalWidth, originalHeight;
let isOriginalSize = true;

// Переконуємося, що зображення завантажене перед отриманням розмірів
image.onload = function () {
    originalWidth = image.naturalWidth;
    originalHeight = image.naturalHeight;

    // Встановлюємо початкові розміри, щоб уникнути проблем із CSS
    image.style.width = originalWidth + 'px';
    image.style.height = originalHeight + 'px';
};

// Якщо зображення вже завантажене (наприклад, кешоване), викликаємо onload вручну
if (image.complete) {
    image.onload();
}

button.addEventListener('click', function () {
    if (isOriginalSize) {
        image.style.width = originalWidth * 2 + 'px';
        image.style.height = originalHeight * 2 + 'px';
    } else {
        image.style.width = originalWidth + 'px';
        image.style.height = originalHeight + 'px';
    }
    isOriginalSize = !isOriginalSize;
});
