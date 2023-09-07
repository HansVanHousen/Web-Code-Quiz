 to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers

WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
```

* Application GitHub URL submitted.

* Repository has a unique name.



* Repository contains quality readme file with description, screenshot, and link to deployed application.

* The URL of the functional, deployed application.

* The URL of the GitHub repository, with a unique name and a readme describing the project.

 // if (questionIndex === questions.length1) {
  //  return endQuiz()
  // }
  // if (questionIndex < questions.length - 1) {
  //   questionIndex++;
  //   startQuiz();
  // }

  // function endQuiz() {
  //   questions.style.display = "none"
  //   answers.style.display = "none"
  // }
}

// function endQuiz() {
//   questions.style.display = "none"
//   answers.style.display = "none"
// }
// function onLoad() {
//   initials.style.display = "none"
// }
// onLoad()




function onStart() {
  function hideStart() {
  document.getElementById("start-button").style.display = "none";
  }
  var SB= document.getElementById("start-button");
  SB.addEventListener("click", hideStart);
}
onStart()