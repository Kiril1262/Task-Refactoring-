
const scoreElement = document.getElementById('score');
const questionElement = document.getElementById('question');
const resultElement = document.getElementById('result');
const answerInput = document.getElementById('answer');
const checkButton = document.getElementById('checkButton');
const nextButton = document.getElementById('nextButton');

class MathQuiz
{
    constructor()
    {
        this.score = 0;
        this.num1 = 0;
        this.num2 = 0;
    }

    generateQuestion()
    {
        this.num1 = Math.floor(Math.random() * 10) + 1;
        this.num2 = Math.floor(Math.random() * 10) + 1;
        questionElement.textContent = `Завдання: ${this.num1} × ${this.num2}`;
        resultElement.textContent = '';
        answerInput.value = '';
    }

    checkAnswer(userAnswer)
    {
        const correctAnswer = this.num1 * this.num2;

        if (userAnswer === correctAnswer) {
            resultElement.textContent = 'Правильно!';
            resultElement.style.color = 'green';
            this.score++;
        } else {
            resultElement.textContent = `Неправильно! Правильна відповідь: ${correctAnswer}`;
            resultElement.style.color = 'red';
        }

        scoreElement.textContent = this.score;
    }
}
    const quiz = new MathQuiz();
    checkButton.addEventListener('click', () => quiz.checkAnswer(parseInt(answerInput.value, 10)));
    nextButton.addEventListener('click', () => quiz.generateQuestion());
    quiz.generateQuestion();