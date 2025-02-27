document.addEventListener("DOMContentLoaded", () => {
    const questionElement = document.getElementById("question");
    const scoreElement = document.getElementById("score");
    const answersForm = document.getElementById("answers");
    const resultElement = document.getElementById("result");
    const nextButton = document.getElementById("next");

    let score = 0;
    let correctAnswer = 0;
    let isAnswerChecked = false;

    function generateQuestion() {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        correctAnswer = num1 * num2;

        questionElement.textContent = `${num1} × ${num2}`;
        resultElement.textContent = "";

        const answers = [];
        const correctPosition = Math.floor(Math.random() * 4);

        for (let i = 0; i < 4; i++) {
            if (i === correctPosition) {
                answers.push(correctAnswer);
            } else {
                let fakeAnswer;
                do {
                    fakeAnswer = Math.floor(Math.random() * 100) + 1;
                } while (answers.includes(fakeAnswer) || fakeAnswer === correctAnswer);
                answers.push(fakeAnswer);
            }
        }

        const answerLabels = answersForm.querySelectorAll("label");
        answerLabels.forEach((label, index) => {
            const input = label.querySelector("input");
            const span = label.querySelector("span");
            input.value = answers[index];
            input.checked = false;
            span.textContent = answers[index];
        });

        isAnswerChecked = false;
    }

    answersForm.addEventListener("change", (event) => {
        if (isAnswerChecked) return;

        const selectedAnswer = parseInt(event.target.value, 10);
        if (selectedAnswer === correctAnswer) {
            resultElement.textContent = "Правильно!";
            resultElement.style.color = "green";
            score++;
        } else {
            resultElement.textContent = `Неправильно! Правильна відповідь: ${correctAnswer}`;
            resultElement.style.color = "red";
        }

        scoreElement.textContent = score;
        isAnswerChecked = true;
    });

    nextButton.addEventListener("click", generateQuestion);

    // Генеруємо перше завдання при завантаженні сторінки
    generateQuestion();
});