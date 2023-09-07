// var lose = document.querySelector(".lose");
var setNextQuestion = document.getElementById("next-btn");
var questioncontainer = document.getElementById("questions");
var startButton = document.querySelector("#start-button");
var questiontext = document.getElementById("question-text");

var timer = document.getElementById("timer-count");
var score = document.getElementById("score-counter");

let timerCount = 10;
var scoreCount = 0;

// var numBlanks = 0;
// var loseCounter = 0;
var isWin = false;
// var timer;
// var timerCount = 100;

var questionIndex = 0;

var questions = [
  {
    question: "who is the captain of NCC-1701-D",
    answers: ["Kirk", "Picard", "Janeway"],
    correct: "Picard",
  },

  {
    question: "who is 2nd in command on DS9",
    answers: ["Worf", "Riker", "Kira"],
    correct: "Kira",
  },

  {
    question: "If you have a Horga'hn on display, what do you seek?",
    answers: ["The Celestial Temple", "Jamaharon", "A Borg Cube"],
    correct: "Jamaharon",
  },

  {
    question: "What has Voyager gone too far to be stopped by?",
    answers: ["Dust", "The Borg", "Lack of Dilithium Crystals"],
    correct: "Dust",
  },

  {
    question: "What class is the USS Cerritos?",
    answers: ["Galaxy", "California", "Dreadnaught"],
    correct: "California",
  },
  {
    question: "What class is the name of Data's Brother?",
    answers: ["Lor", "Lal", "Deta"],
    correct: "Lor",
  },
  {
    question: "Where does the federation first engage the Borg?",
    answers: ["Wolf 359", "Yavin IV", "The Delta Quadrant"],
    correct: "Wolf 359",
  },
  {
    question: "who are the enemies of the wormhole aliens?",
    answers: ["Pah-Wraiths", "The Dominion", "The Cardassians"],
    correct: "Pah-Wraiths",
  },
  {
    question: "Which caracter was NOT played by Jeffrey Combs?",
    answers: ["Weyoun", "Brunt", "Morn"],
    correct: "Morn",
  },
  {
    question:
      "What is the name of the planet Picard finds himself on in The Inner Light?",
    answers: ["Katann", "Catan", "Risa"],
    correct: "Katann",
  },
];
startButton.addEventListener("click", function () {
  document.querySelector("#start-page").setAttribute("class", "hide");
  document.querySelector("#main-quiz").setAttribute("class", "show");
  startQuiz();
  startTimer();
});

function startTimer() {
  timer.textContent = timerCount;
  // use id for timer element
  let countdown = setInterval(() => {
    timerCount--;
    timer.textContent = timerCount;
    if(timerCount <=0) {
        clearInterval(countdown)
        // timer.style.display = "none"
    }
  }, 1000);
}

function startQuiz() {
  // score.textContent= "score: " + scoreCount
  if (questionIndex < questions.length){

  questiontext.innerText = questions[questionIndex].question;
  var btntext1 = document.getElementById("btn1");
  var btntext2 = document.getElementById("btn2");
  var btntext3 = document.getElementById("btn3");
  btntext1.innerText = questions[questionIndex].answers[0];
  btntext2.innerText = questions[questionIndex].answers[1];
  btntext3.innerText = questions[questionIndex].answers[2];
  btntext1.addEventListener("click", checkAnswer);
  btntext2.addEventListener("click", checkAnswer);
  btntext3.addEventListener("click", checkAnswer);
} else {
// end quiz
}
}
function checkAnswer(event) {
//   console.log(event.target.innerText);
  var chosenAnswer = event.target.innerText;
  if (chosenAnswer === questions[questionIndex].correct) {
// 58
    scoreCount++;
    console.log("correct")
    score.textContent = scoreCount
  } else {
    console.log("not correct")

    timerCount--;
  }

  if (questionIndex < questions.length - 1) {
    questionIndex++;
    startQuiz();
  }
  startQuiz()
}

function setNextQuestion() {
  showmainList([0]);
}
