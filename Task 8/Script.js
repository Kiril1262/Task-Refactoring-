const image = document.getElementById('toggleImage');
const button = document.getElementById('toggleButton');

// Збереження початкових розмірів
const originalWidth = image.width;
const originalHeight = image.height;
let isOriginalSize = true;

button.addEventListener('click', function() {
    if (isOriginalSize) {
        image.style.width = originalWidth * 2 + 'px';
        image.style.height = originalHeight * 2 + 'px';
    } else {
        image.style.width = originalWidth + 'px';
        image.style.height = originalHeight + 'px';
    }
    isOriginalSize = !isOriginalSize;
});