const scoreElement = document.getElementById('score');
const questionElement = document.getElementById('question');
const resultElement = document.getElementById('result');
const answerInput = document.getElementById('answer');
const checkButton = document.getElementById('checkButton');
const nextButton = document.getElementById('nextButton');

let score = 0;
let currentQuestion = { num1: 0, num2: 0 };

function updateResult(isCorrect, correctAnswer = null) {
    if (isCorrect) {
        resultElement.textContent = 'Правильно!';
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = `Неправильно! Правильна відповідь: ${correctAnswer}`;
        resultElement.style.color = 'red';
    }
}

function generateQuestion() {
    currentQuestion.num1 = Math.floor(Math.random() * 10) + 1;
    currentQuestion.num2 = Math.floor(Math.random() * 10) + 1;
    questionElement.textContent = `Завдання: ${currentQuestion.num1} × ${currentQuestion.num2}`;
    resultElement.textContent = '';
    answerInput.value = '';
}

function checkAnswer() {
    const userAnswer = parseInt(answerInput.value, 10);
    const correctAnswer = currentQuestion.num1 * currentQuestion.num2;

    if (userAnswer === correctAnswer) {
        score++;
        updateResult(true);
    } else {
        updateResult(false, correctAnswer);
    }

    scoreElement.textContent = score;
}

function initEvents() {
    checkButton.addEventListener('click', checkAnswer);
    nextButton.addEventListener('click', generateQuestion);
}

generateQuestion();
initEvents();
