// Fixed password
const FIXED_PASSWORD = "12345";

// Quiz Questions
const questions = [
    { q: "What is the capital of India?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"], answer: "Delhi" },
    { q: "Which planet is known as the Red Planet?", options: ["Mars", "Venus", "Earth", "Jupiter"], answer: "Mars" },
    { q: "Who is the father of computers?", options: ["Charles Babbage", "Newton", "Einstein", "Edison"], answer: "Charles Babbage" },
    { q: "Which is the largest ocean?", options: ["Atlantic", "Pacific", "Indian", "Arctic"], answer: "Pacific" },
    { q: "What is the national animal of India?", options: ["Lion", "Tiger", "Elephant", "Leopard"], answer: "Tiger" },
    { q: "Which gas do plants absorb?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"], answer: "Carbon Dioxide" },
    { q: "What is H2O?", options: ["Water", "Oxygen", "Hydrogen", "Acid"], answer: "Water" },
    { q: "Which is the fastest land animal?", options: ["Cheetah", "Lion", "Horse", "Leopard"], answer: "Cheetah" },
    { q: "Which festival is known as the festival of lights?", options: ["Diwali", "Holi", "Eid", "Christmas"], answer: "Diwali" },
    { q: "Which is the smallest prime number?", options: ["1", "2", "3", "5"], answer: "2" }
];

let shuffledQuestions = [];
let current = 0;
let score = 0;
let selected = null;

// Login Function
function login() {
    const mobile = document.getElementById("mobile").value;
    const password = document.getElementById("password").value;

    if (mobile.length === 10 && password === FIXED_PASSWORD) {
        document.getElementById("loginBox").classList.add("hide");
        document.getElementById("quizBox").classList.remove("hide");
        startQuiz();
    } else {
        alert("Invalid Mobile Number or Password!");
    }
}

// Start Quiz
function startQuiz() {
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    loadQuestion();
}

// Load Question
function loadQuestion() {
    if (current < shuffledQuestions.length) {
        document.getElementById("question").innerText = shuffledQuestions[current].q;
        const optionsDiv = document.getElementById("options");
        optionsDiv.innerHTML = "";
        shuffledQuestions[current].options.forEach(opt => {
            let div = document.createElement("div");
            div.className = "option";
            div.innerText = opt;
            div.onclick = () => selectOption(div, opt);
            optionsDiv.appendChild(div);
        });
    } else {
        endQuiz();
    }
}

// Select Option
function selectOption(element, option) {
    selected = option;
    document.querySelectorAll(".option").forEach(opt => {
        opt.style.background = "#f5f5f5";
    });
    element.style.background = "#cbbafc";
}

// Next Question
function nextQuestion() {
    if (!selected) {
        alert("Please select an option!");
        return;
    }
    if (selected === shuffledQuestions[current].answer) {
        score++;
    }
    current++;
    selected = null;
    loadQuestion();
}

// End Quiz
function endQuiz() {
    document.getElementById("quizBox").classList.add("hide");
    document.getElementById("resultBox").classList.remove("hide");
    document.getElementById("score").innerText = `🎉 You scored ${score} out of ${questions.length}`;
}
