let score = 0;
let num1, num2;

const scoreElement = document.getElementById('score');
const questionElement = document.getElementById('question');
const resultElement = document.getElementById('result');
const answerInput = document.getElementById('answer');
const checkButton = document.getElementById('checkButton');
const nextButton = document.getElementById('nextButton');

// Функція для генерації нового завдання
function generateQuestion() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    questionElement.textContent = `Завдання: ${num1} × ${num2}`;
    resultElement.textContent = '';
    answerInput.value = '';
}

// Функція для перевірки відповіді
function checkAnswer() {
    const userAnswer = parseInt(answerInput.value, 10);
    const correctAnswer = num1 * num2;

    if (userAnswer === correctAnswer) {
        resultElement.textContent = 'Правильно!';
        resultElement.style.color = 'green';
        score++;
    } else {
        resultElement.textContent = `Неправильно! Правильна відповідь: ${correctAnswer}`;
        resultElement.style.color = 'red';
    }

    scoreElement.textContent = score;
}

// Додати події до кнопок
checkButton.addEventListener('click', checkAnswer);
nextButton.addEventListener('click', generateQuestion);

// Генерувати перше завдання
generateQuestion();