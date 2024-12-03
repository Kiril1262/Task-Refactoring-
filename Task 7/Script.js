let widthRange = document.getElementById('widthRange');
let heightRange = document.getElementById('heightRange');
let rotateRange = document.getElementById('rotateRange');
let widthValue = document.getElementById('widthValue');
let heightValue = document.getElementById('heightValue');
let rotateValue = document.getElementById('rotateValue');

let block = document.getElementById('block');

function updateBlock() {
    let width = Math.min(widthRange.value, window.innerWidth - block.offsetLeft - 10); // Consider margins and screen width
    let height = Math.min(heightRange.value, window.innerHeight - block.offsetTop - 20); // Consider margins and screen height
    let rotate = rotateRange.value;

    block.style.width = width + 'px';
    block.style.height = height + 'px';
    block.style.transform = `rotate(${rotate}deg)`;

    widthValue.value = width;
    heightValue.value = height;
    rotateValue.value = rotate;
}

widthRange.addEventListener('input', updateBlock);
heightRange.addEventListener('input', updateBlock);
rotateRange.addEventListener('input', updateBlock);