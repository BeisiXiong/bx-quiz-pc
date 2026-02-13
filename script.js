/* ------------------ Quiz Data ------------------ */

const quizData = [
    {
        question: "When was our first date?",
        answers: [
            "Dec 20, 2026",
            "Dec 21, 2026",
            "Dec 22, 2026",
            "Dec 23, 2026"
        ],
        correct: 1
    },
    {
        question: "When did we have sex for the first time?",
        answers: [
            "Jan 11, 2026",
            "Jan 12, 2026",
            "Jan 13, 2026",
            "Jan 11, 2026"
        ],
        correct: 0
    },
    {
        question: "What game did we play on the magical date at the hotel Vienna House by Wyndham on Jan 17, 2026?",
        answers: [
            "20 Questions",
            "Charades",
            "Who Am I?",
            "Arm wrestling (LOL)"
        ],
        correct: 0
    },
    {
        question: "What do I usually call you?",
        answers: [
            "Pookie",
            "Baby",
            "Cutie",
            "Your name"
        ],
        correct: 2
    },
    {
        question: "What message do you receive when I tap the chip?",
        answers: [
            "I miss you, cutie 🥰",
            "I miss you, cutie 🥰",
            "I miss you, cutie 🥰",
            "I miss you, cutie 🥰"
        ],
        correct: "all"
    }
];

/* ------------------ State ------------------ */

let currentQuestion = 0;

/* ------------------ Elements ------------------ */

const introEl = document.getElementById("intro");
const quizScreenEl = document.getElementById("quizScreen");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");

const congratsPopup = document.getElementById("congratsPopup");
const prizePopup = document.getElementById("prizePopup");

/* ------------------ Start Flow ------------------ */

function startQuiz() {
    introEl.classList.add("hidden");
    quizScreenEl.classList.remove("hidden");
    currentQuestion = 0;
    loadQuestion();
}

/* ------------------ Quiz Logic ------------------ */

function loadQuestion() {
    const q = quizData[currentQuestion];

    questionEl.textContent =
        `Question ${currentQuestion + 1}/${quizData.length}: ${q.question}`;

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
    const rule = quizData[currentQuestion].correct;
    const isCorrect = (rule === "all" || selectedIndex === rule);

    if (isCorrect) {
        feedbackEl.textContent = "Correct ✅";
        feedbackEl.className = "correct";

        setTimeout(() => {
            currentQuestion++;

            if (currentQuestion >= quizData.length) {
                showCongratsPopup();
            } else {
                loadQuestion();
            }
        }, 700);

    } else {
        feedbackEl.textContent = "Wrong — do it again ❌";
        feedbackEl.className = "wrong";
    }
}

/* ------------------ Popup Flow ------------------ */

function showCongratsPopup() {
    congratsPopup.classList.remove("hidden");
}

function goToPrize() {
    congratsPopup.classList.add("hidden");
    prizePopup.classList.remove("hidden");
}

function closeAllPopups() {
    prizePopup.classList.add("hidden");
    quizScreenEl.classList.add("hidden");
    introEl.classList.remove("hidden");
    currentQuestion = 0;
}
