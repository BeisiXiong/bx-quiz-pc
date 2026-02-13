const quizData = [
    {
        question: "When was our first date?",
        answers: [
            "Dec 18, 2026",
            "Dec 22, 2026",
            "Dec 20, 2026",
            "Dec 23, 2026"
        ],
        correct: 1
    },
    {
        question: "When did we have sex for the first time?",
        answers: [
            "Jan 13, 2026",
            "Jan 12, 2026",
            "Jan 11, 2026",
            "Jan 10, 2026"
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

let currentQuestion = 0;

const introEl = document.getElementById("intro");
const quizScreenEl = document.getElementById("quizScreen");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const popup = document.getElementById("popup");

/* ---------- Start ---------- */

function startQuiz() {
    introEl.classList.add("hidden");
    quizScreenEl.classList.remove("hidden");
    loadQuestion();
}

/* ---------- Quiz ---------- */

function loadQuestion() {
    const q = quizData[currentQuestion];

    questionEl.textContent = `Question ${currentQuestion + 1}/5: ${q.question}`;
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

    const isCorrect =
        rule === "all" || selectedIndex === rule;

    if (isCorrect) {
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

/* ---------- Popup ---------- */

function showPopup() {
    popup.classList.remove("hidden");
}

function closePopup() {
    popup.classList.add("hidden");
    currentQuestion = 0;
    introEl.classList.remove("hidden");
    quizScreenEl.classList.add("hidden");
}
