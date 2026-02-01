const quizData = [
  {
    question: "Question placeholder?",
    options: ["Answer 0", "Answer 1", "Answer 2", "Answer3"],
    // You can add as many answer options as you'd like
    answer: 1   // Correct answer
  }
];

let currentQuiz = 0;
let score = 0;

const quizEl = document.getElementById('quiz');
const nextBtn = document.getElementById('nextBtn');
const resultEl = document.getElementById('result');

function loadQuiz() {
  const currentData = quizData[currentQuiz];
  quizEl.innerHTML = `
    <h3>${currentData.question}</h3>
    ${currentData.options.map((opt, i) => `<button class="option" onclick="selectAnswer(${i})">${opt}</button>`).join('')}
  `;
}

function selectAnswer(selected) {
  const correct = quizData[currentQuiz].answer;
  if (selected === correct) score++;
  
  // disable all buttons
  document.querySelectorAll('.option').forEach(btn => btn.disabled = true);
  
  // highlight correct & wrong
  document.querySelectorAll('.option').forEach((btn, i) => {
    if(i === correct) btn.style.background = "#0f0";
    else if(i === selected) btn.style.background = "#f00";
  });
}

nextBtn.addEventListener('click', () => {
  currentQuiz++;
  if(currentQuiz < quizData.length){
    loadQuiz();
  } else {
    quizEl.innerHTML = "";
    nextBtn.style.display = "none";
    resultEl.innerHTML = `You scored ${score} out of ${quizData.length}.`;
  }
});

loadQuiz();
