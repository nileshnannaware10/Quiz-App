const quizData = [
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<scrip>", "<style>", "<css>", "<link>"],
    answer: "<style>",
  },
  {
    question: "Which programming language is used for web development?",
    options: ["Python", "JavaScript", "C++", "Java"],
    answer: "JavaScript",
  },
  {
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "HyperLink Machine Language",
      "None of these",
    ],
    answer: "HyperText Markup Language",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Control Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "Which tag is used to include JavaScript in HTML?",
    options: ["<script>", "<javascript>", "<js>", "<code>"],
    answer: "<script>",
  },
  {
    question: "What is the correct syntax for referring to an external JavaScript file?",
    options: [
      "<script href=\"filename.js\"></script>",
      "<script src=\"filename.js\"></script>",
      "<script name=\"filename.js\"></script>",
      "<script file=\"filename.js\"></script>"
    ],
    answer: "<script src=\"filename.js\"></script>",
  },
  {
    question: "Which property is used to change the background color in CSS?",
    options: ["background-color", "color", "bgcolor", "background"],
    answer: "background-color",
  },
  {
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Management",
      "Data Output Machine",
      "Document Output Management"
    ],
    answer: "Document Object Model",
  },
  {
    question: "What is the use of the <canvas> element in HTML?",
    options: [
      "To draw graphics",
      "To create tables",
      "To include videos",
      "To create forms"
    ],
    answer: "To draw graphics",
  },
  {
    question: "Which method is used to add an element to the end of an array in JavaScript?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "push()",
  },
  {
    question: "What is the purpose of the \"this\" keyword in JavaScript?",
    options: [
      "To refer to the current object",
      "To declare a variable",
      "To create a function",
      "To loop through an array"
    ],
    answer: "To refer to the current object",
  }
];

let currentQuestionIndex = 0;
let score = 0;
let timer;

const quizContainer = document.getElementById("quiz");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-btn");
const timerElement = document.getElementById("timer");

function startQuiz() {
  showQuestion();
  startTimer();
}

function showQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;
  optionsElement.innerHTML = "";
  currentQuestion.options.forEach((option) => {
    const li = document.createElement("li");
    li.innerText = option;
    li.className = "option";
    li.addEventListener("click", () => checkAnswer(option));
    optionsElement.appendChild(li);
  });
}

function checkAnswer(selectedOption) {
  const currentQuestion = quizData[currentQuestionIndex];
  if (selectedOption === currentQuestion.answer) {
    score++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function startTimer() {
  let time = 120; 
  timerElement.innerText = `Time: ${time}s`;
  timer = setInterval(() => {
    time--;
    timerElement.innerText = `Time: ${time}s`;
    if (time === 0) {
      clearInterval(timer);
      endQuiz();
    }
  }, 1000);
}

function endQuiz() {
  clearInterval(timer);
  quizContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");
  scoreElement.innerText = `Your score is ${score}/${quizData.length}`;
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    showQuestion();
  } else {
    endQuiz();
  }
});

restartButton.addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  resultContainer.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  startQuiz();
});



// Initialize Quiz
startQuiz();
