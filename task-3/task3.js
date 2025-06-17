// Navigation Functions
function showQuiz() {
  document.getElementById("homePage").style.display = "none";
  document.getElementById("quizPage").style.display = "block";
  document.getElementById("jokePage").style.display = "none";
  startQuiz();
}

function showJoke() {
  document.getElementById("homePage").style.display = "none";
  document.getElementById("quizPage").style.display = "none";
  document.getElementById("jokePage").style.display = "block";
}

function goHome() {
  document.getElementById("homePage").style.display = "block";
  document.getElementById("quizPage").style.display = "none";
  document.getElementById("jokePage").style.display = "none";
}

// Quiz Logic with improvements

const questionsOriginal = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Hot Mail", "How to Make Links"],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS"],
    answer: "CSS",
  },
  {
    question: "Which is not a JavaScript Framework?",
    options: ["React", "Angular", "Python"],
    answer: "Python",
  },
  {
    question: "Which is used to connect to a database?",
    options: ["PHP", "HTML", "JS"],
    answer: "PHP",
  },
  {
    question: "What does CPU stand for?",
    options: [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Program Unit",
    ],
    answer: "Central Processing Unit",
  },
  {
    question: "What does RAM stand for?",
    options: [
      "Random Access Memory",
      "Read Access Memory",
      "Rapid Action Mode",
    ],
    answer: "Random Access Memory",
  },
  {
    question: "Which company developed the Java programming language?",
    options: ["Microsoft", "Sun Microsystems", "Apple"],
    answer: "Sun Microsystems",
  },
  {
    question: "What is the main function of an operating system?",
    options: [
      "Manage hardware and software resources",
      "Write code",
      "Compile programs",
    ],
    answer: "Manage hardware and software resources",
  },
];

let questions = [];
let currentIndex = 0;
let score = 0;
let answered = false;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");

function startQuiz() {
  questions = shuffleArray([...questionsOriginal]);
  currentIndex = 0;
  score = 0;
  nextBtn.style.display = "inline-block";
  nextBtn.textContent = "Next";
  showQuestion();
}

function showQuestion() {
  const current = questions[currentIndex];
  questionEl.style.opacity = 0;
  optionsEl.style.opacity = 0;
  resultEl.textContent = "";
  answered = false;
  nextBtn.disabled = true;

  setTimeout(() => {
    questionEl.innerHTML = `<strong>Question ${currentIndex + 1} of ${
      questions.length
    }</strong><br>${current.question}`;
    optionsEl.innerHTML = "";

    current.options.forEach((option) => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.onclick = () => selectOption(btn, option, current.answer);
      optionsEl.appendChild(btn);
    });

    questionEl.style.opacity = 1;
    optionsEl.style.opacity = 1;
  }, 300);
}

function selectOption(button, selected, correctAnswer) {
  if (answered) return;
  answered = true;
  nextBtn.disabled = false;

  Array.from(optionsEl.children).forEach((btn) => {
    btn.disabled = true;
    if (btn.textContent === correctAnswer) {
      btn.classList.add("correct");
    }
    if (btn.textContent === selected && selected !== correctAnswer) {
      btn.classList.add("incorrect");
    }
  });

  if (selected === correctAnswer) {
    score++;
    resultEl.textContent = "✅ Correct!";
    resultEl.style.color = "#2e7d32";
  } else {
    resultEl.textContent = `❌ Incorrect! Correct answer: ${correctAnswer}`;
    resultEl.style.color = "#b71c1c";
  }
}

nextBtn.onclick = () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    showQuizResults();
  }
};

function showQuizResults() {
  questionEl.textContent = "🎉 Quiz Completed!";
  optionsEl.innerHTML = "";
  resultEl.style.color = "#000";
  resultEl.innerHTML = `✅ Your Score: ${score} / ${questions.length}<br>Thanks for taking the quiz!`;

  nextBtn.textContent = "Restart Quiz";
  nextBtn.disabled = false;
  nextBtn.onclick = () => {
    startQuiz();
  };
}

// Utility to shuffle questions array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Joke API remains unchanged

const getJokeBtn = document.getElementById("getJokeBtn");
const jokeDisplay = document.getElementById("jokeDisplay");

getJokeBtn.onclick = () => {
  fetch("https://v2.jokeapi.dev/joke/Any?type=single")
    .then((res) => res.json())
    .then((data) => {
      jokeDisplay.textContent = data.joke || "Couldn't fetch a joke!";
    })
    .catch(() => {
      jokeDisplay.textContent = "❌ Error fetching joke.";
    });
};
