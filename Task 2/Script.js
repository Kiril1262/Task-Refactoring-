const emailsList = document.querySelectorAll('input[type="checkbox"]');
const selectedEmailsDiv = document.getElementById('selected-emails');

emailsList.forEach(email => {
    email.addEventListener('change', () => {
        const selectedEmails = Array.from(emailsList)
            .filter(email => email.checked)
            .map(email => email.value);

        selectedEmailsDiv.textContent = selectedEmails.join(', ');
    });
});