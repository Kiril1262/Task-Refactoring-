function showSelected() {
    // Отримуємо всі чекбокси
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    // Фільтруємо лише вибрані
    const selectedValues = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
    // Виводимо результат
    document.getElementById('output').textContent = selectedValues.join(', ');
}