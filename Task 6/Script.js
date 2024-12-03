let inputs = document.querySelectorAll('input, textarea');

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.closest('div').classList.add('active');
    });

    input.addEventListener('blur', () => {
        input.closest('div').classList.remove('active');
    });
});