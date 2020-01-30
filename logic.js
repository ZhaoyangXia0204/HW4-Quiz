// variable for questions
var questions = [
  {
    question: "Who scored the most points in one game?",

    choiceA: "Micheal Jordan",
    choiceB: "Wilt Chamberlain",
    choiceC: "Kobe Bryant",
    choiceD: "Lebron James",
    correct: "Wilt Chamberlain"
  },
  {
    question: "What player has the most career assists?",

    choiceA: "Chris Paul",
    choiceB: "Allen Iverson",
    choiceC: "Oscar Robertson",
    choiceD: "John Stockton",
    correct: "John Stockton"
  },
  {
    question: "Who won the most career NBA championships as player?",

    choiceA: "Bill Russel",
    choiceB: "Micheal Jordan",
    choiceC: "Wilt Chamberlain",
    choiceD: "John Havlicek",
    correct: "Bill Russel"
  },
  {
    question: "How many points did 'Black Manmba' score in his last game?",

    choiceA: "61",
    choiceB: "60",
    choiceC: "59",
    choiceD: "58",
    correct: "60"
  }
  /*
    @TODO: write your questions here
  */
];



// variables to keep track of quiz state


/**
 * Variables to reference DOM elements
 * 
 * @description
 * You MAY want to consider the following elements:
 *  - [x] A button to start the quiz
 *  - [x] An element that displays the current time
 *  - [x] A questions container that has:
 *    - [ ] An element that displays the current question text
 *    - [x] A container for the choices buttons
 *  - [ ] An element that displays whether the user got a question correct or not
 *  - [ ] An input field to allow the user to put in their initials 
 *  - [x] A button to submit the user's high score
 * 
 * NOTE: Make sure your `index.html` elements correspond to these!
 * 
 * @see https://www.w3schools.com/jsref/met_document_getelementbyid.asp
 */
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var name = document.getElementById("name");
var timeEl = document.querySelector(".time");
var choiceA = document.querySelector("#A");
var choiceB = document.querySelector("#B");
var choiceC = document.querySelector("#C");
var choiceD = document.querySelector("#D");
var endScreen = document.getElementById("end-screen");
var finalScore = document.getElementById("finalScore");
var que = document.getElementById("qqq");
var flashMsg = document.getElementById("falshMsg");






function startQuiz() {

  // hide start screen
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");

  // un-hide questions container
  questionsEl.removeAttribute("class");
  // questionsEl.classList.remove("hide");

  setTimer();
  getQuestion();

  // call the function that gets the next question 

}





var nowQuestion = 0;
var q = questions[nowQuestion];


function getQuestion() {
  var q = questions[nowQuestion];

  que.textContent = q.question;


  choiceA.textContent = q.choiceA;
  choiceB.textContent = q.choiceB;
  choiceC.textContent = q.choiceC;
  choiceD.textContent = q.choiceD;


}



  choiceA.addEventListener("click", questionClick);
  choiceB.addEventListener("click", questionClick);
  choiceC.addEventListener("click", questionClick);
  choiceD.addEventListener("click", questionClick);



var score = 0;



function questionClick() {
  var q = questions[nowQuestion];

  console.log(event.target.textContent)
  if (event.target.textContent === q.correct) {
    console.log("correct!");
    alert( "right!");
    score=score+25;
  } else {
    console.log("wrong!");
    alert("wrong!");
    score=score;
  }
  // @TODO: write the rest of your function code here
  //*/
   //check if we’ve run out of questions
  if (nowQuestion === questions.length - 1) {
    quizEnd();
  } else {
    nowQuestion++;
    getQuestion();
  }
}




function quizEnd() {
  document.getElementById("questions").innerHTML = "";
  endScreen.classList.remove("hide");
  finalScore.innerText = "Your Score: " + score;
  


}




var secondsLeft = 100;


function setTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time left : " + secondsLeft;

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      quizEnd();
    }

  }, 1000);

}




function saveHighscore() {
  var name = document.getElementById("name").value;

  console.log("We did it!");
  event.preventDefault();
  var sU = JSON.parse(window.localStorage.getItem("scoreUser")) || [];
  
  var newScore = {
    username: name,
    Score: score
  };
  console.log(newScore);
  sU.push(newScore);

  
 
  window.localStorage.setItem("scoreUser",JSON.stringify(sU));
  

}

submitBtn.onclick = saveHighscore;

startBtn.onclick = startQuiz;