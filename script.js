const quizData = [
    {
        question: "When was our first date?",
        answers: ["Dec 20, 2026", "Dec 21, 2026", "Dec 22, 2026", "Dec 23, 2026"],
        correct: 2
    },
    {
        question: "When did we have sex for the first time?",
        answers: ["Jan 12, 2026", "Jan 13, 2026", "Jan 14, 2026", "Jan 15, 2026"],
        correct: 1
    },
    {
        question: "What game did we play on the “magical date” at the hotel Vienna House by Wyndham on Jan 17, 2026?",
        answers: ["20 Questions", "Charades", "Who Am I?", "Arm wrestling (LOL)"],
        correct: 0
    },
    {
        question: "What do I usually call you?",
        answers: ["Pookie", "Baby", "Cutie", "Paula"],
        correct: 2
    },
    {
        question: "What default message do you receive when I tap the chip?",
        answers: ["I miss you, cutie", "I miss you, cutie", "I miss you, cutie", "I miss you, cutie"],
        correct: all
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
