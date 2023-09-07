var setNextQuestion = document.getElementById("next-btn");
var questioncontainer = document.getElementById("questions");
var startButton = document.querySelector("#start-button");
var questiontext = document.getElementById("question-text");
var initialsForm = document.getElementById("initialsForm")
var initials = document.getElementById("initials")


var timer = document.getElementById("timer-count");
var score = document.getElementById("score-counter");

let storedUsers;
let timerCount = 10;
var scoreCount = 0;


var isWin = false;


var questionIndex = 0;

var questions = [
  {
    question: "Which method is used to add an element to the end of an array in JavaScript?",
    answers: ["push()", "append()", "addToEach()"],
    correct: "push()",
  },

  {
    question: "What is the purpose of the addEventListener method in JavaScript?",
    answers: ["To create an element on the webpage", "To add a function that executes when an event occurs ", "To style a webpage"],
    correct: "To add a function that executes when an event occurs ",
  },

  {
    question: "Which data type is used to represent a list of values in JavaScript?",
    answers: ["object", "array", "string"],
    correct: "array",
  },

  {
    question: "How do you declare a function in JavaScript?",
    answers: ["function myFunction() { }", "var myFunction = function() { }", "def myFunction()"],
    correct: "function myFunction() { }",
  },

  {
    question: "What is the purpose of the typeof operator in JavaScript?",
    answers: ["To check if an element exists in the DOM", "To determine the data type of a value", "To create a new variable"],
    correct: "To determine the data type of a value ",
  },
  {
    question: "How do you write an if statement in JavaScript?",
    answers: ["if () { }", "if {} else {}", "if () { } else {} "],
    correct: "if () { } else {} ",
  },
  {
    question: "Which operator is used to compare both value and type in JavaScript?",
    answers: ["=", "==", "==="],
    correct: "===",
  },
  {
    question: "What is the purpose of the getElementById method in JavaScript?",
    answers: ["To retrieve an element by its class name", "To retrieve an element by its ID", "To retrieve all elements on the webpage"],
    correct: "To retrieve an element by its ID",
  },
  {
    question: "What is the purpose of the JSON.parse() function in JavaScript?",
    answers: ["To convert a JSON string to a JavaScript object", "To convert a JavaScript object to a JSON string", "To format text as JSON"],
    correct: "To convert a JSON string to a JavaScript object",
  },
  {
    question:
      "Which event is triggered when an HTML form is submitted?",
    answers: ["onClick", "onSubmit", "onFormSubmit"],
    correct: "onSubmit",
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
    if (timerCount <= 0) {
      clearInterval(countdown);
    }
  }, 1000);
}


function startQuiz() {
  if (questionIndex < questions.length) {
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
  }
}
function checkAnswer(event) {
  //   console.log(event.target.innerText);
  var chosenAnswer = event.target.innerText;
  if (chosenAnswer === questions[questionIndex].correct) {
  
    scoreCount++;
    console.log("correct");
    score.textContent = scoreCount;
  } else {
    console.log("not correct");

    timerCount--;
  }

  if (questionIndex < questions.length - 1) {
    questionIndex++;
    startQuiz();
  }
  if (questionIndex === questions.length) {
    endQuiz(); // Call endQuiz when all questions are answered
  }
}

function endQuiz() {
 
  document.querySelector("#high-scores").style.display = "block";

  let savedScores = JSON.parse(localStorage.getItem("highscores"));

  let scoreList = document.getElementById("score-list");
  scoreList.innerHTML = "";
  savedScores.forEach((score, index) => {
    let listItem = document.createElement("li");
    listItem.textContent = `${index + 1}. ${score.user}: ${score.userScore}`;
    scoreList.appendChild(listItem);
  });
}



function onLoad(){
if(JSON.parse(localStorage.getItem("highscores")) === null) {
storedUsers = []
}
else {
  storedUsers = JSON.parse(localStorage.getItem("highscores"))
}
console.log(storedUsers)
}
onLoad()

function saveScore(e){
e.preventDefault();
let newScore = {
  user: initials.value,
  userScore: scoreCount
}
storedUsers.push(newScore)
localStorage.setItem("highscores", JSON.stringify(storedUsers));
endQuiz()
}
initialsForm.addEventListener("submit", saveScore)

