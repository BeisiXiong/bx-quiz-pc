const quizData = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Venus"],
        correct: 1
    },
    {
        question: "How many days are in a week?",
        answers: ["5", "6", "7", "8"],
        correct: 2
    },
    {
        question: "Which animal says meow?",
        answers: ["Dog", "Cat", "Cow", "Duck"],
        correct: 1
    },
    {
        question: "What color is the sky on a clear day?",
        answers: ["Blue", "Green", "Purple", "Orange"],
        correct: 0
    },
    {
        question: "2 + 2 equals?",
        answers: ["3", "4", "5", "6"],
        correct: 1
    }
];

let currentQuestion = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const popup = document.getElementById("popup");

function loadQuestion() {
    const q = quizData[currentQuestion];
    questionEl.textContent = `Question ${currentQuestion + 1}/6: ${q.question}`;
    feedbackEl.textContent = "";
    feedbackEl.className = "";

    answersEl.innerHTML = "";

    q.answers.forEach((text, index) => {
        const btn = document.createElement("button");
        btn.textContent = text;
        btn.onclick = () => checkAnswer(index);
        answersEl.appendChild(btn);
    });
}

function checkAnswer(selectedIndex) {
    const correctIndex = quizData[currentQuestion].correct;

    if (selectedIndex === correctIndex) {
        feedbackEl.textContent = "Correct ✅";
        feedbackEl.className = "correct";

        setTimeout(() => {
            currentQuestion++;

            if (currentQuestion >= quizData.length) {
                showPopup();
            } else {
                loadQuestion();
            }
        }, 700);

    } else {
        feedbackEl.textContent = "Wrong — do it again ❌";
        feedbackEl.className = "wrong";
    }
}

function showPopup() {
    popup.classList.remove("hidden");
}

function closePopup() {
    popup.classList.add("hidden");
    currentQuestion = 0;
    loadQuestion();
}

loadQuestion();
