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
/*
  @TODO: write the rest of your variables here
*/


/**
 * Function to start the quiz
 * 
 * @description
 * This function does the following:
 *  - [x] Hide/show page elements
 *  - [x] Start the timer
 *  - [x] Get the next question
 */

function startQuiz() {

  // hide start screen
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");

  // un-hide questions container
  questionsEl.removeAttribute("class");
  // questionsEl.classList.remove("hide");

  // setTimer();
  getQuestion();

  // call the function that gets the next question 

}


/**
 * Function to display next question
 * 
 * @description
 * This function will:
 *  - [ ] Retrieve next question and answers
 *  - [ ] Update the page accordingly
 * 
 * @see https://www.w3schools.com/jsref/event_onclick.asp
 * @see https://www.w3schools.com/js/js_htmldom_methods.asp
 */



var nowQuestion = 0;
var q = questions[nowQuestion];
// var choice1 = document.getElementById("A");
function getQuestion() {
  //event.preventDefault();
  // questionsEl.classList.remove("hide");
  // choicesEl.classList.remove("hide");
  var que = document.getElementById("qqq")
  que.textContent = q.question;


  choiceA.textContent = q.choiceA;
  choiceB.textContent = q.choiceB;
  choiceC.textContent = q.choiceC;
  choiceD.textContent = q.choiceD;

  /*
    @TODO: write your function code here
  */
}


/**
 * Function that runs when the user clicks on an answer
 * 
 * @description
 * This function will:
 *  - [ ] Check if the user picked the right answer or not, and behave accordingly
 *  - [x] End quiz if no more questions left, or go onto next question
 *
 * HINT: for hiding/showing elements, take a look at the `.hide` class in
 *  `styles.css`!
 * 
 * @see https://www.w3schools.com/jsref/met_win_settimeout.asp
 * @see https://www.w3schools.com/jsref/met_element_setattribute.asp
 * @see https://www.w3schools.com/jsref/met_element_removeattribute.asp
 */

// var anyChoice1 = document.querySelector(".choice1")
// var anyChoice2 = document.querySelector(".choice2")
// var anyChoice3 = document.querySelector(".choice3")
// var anyChoice4 = document.querySelector(".choice4")

choiceA.addEventListener("click", questionClick(choiceA))
choiceB.addEventListener("click", questionClick(choiceB))
choiceC.addEventListener("click", questionClick(choiceC))
choiceD.addEventListener("click", questionClick(choiceD))



function questionClick(option) {
  console.log(option)
  if (option.textContent === q.correct) {
    console.log("correct!");
  } else {
    console.log("worng!");
  }

  // @TODO: write the rest of your function code here
  //*/
  // check if we've run out of questions
  if (nowQuestion === questions.length) {
    quizEnd();
  } else {
    nowQuestion++;
    getQuestion();
  }

}


/**
 * Function to end the quiz
 * 
 * @description
 * This function will:
 *  - [ ] Stop the timer
 *  - [ ] Update the DOM accordingly
 *
 * HINT: for hiding/showing elements, take a look at the `.hide` class in
 *  `styles.css`!
 * 
 * @see https://www.w3schools.com/jsref/met_win_clearinterval.asp
 * @see https://www.w3schools.com/jsref/met_element_setattribute.asp
 * @see https://www.w3schools.com/jsref/met_element_removeattribute.asp
 */
function quizEnd() {
  /*
    @TODO: write your function code here
  */

}


/**
 * Function to handle the timer
 * 
 * @description
 * This function will:
 *  - [ ] Update the timer
 *  - [x] End the quiz if the user runs out of time
 */


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



/**
 * Function to save a new high score
 * 
 * @description
 * This function will:
 *  - [ ] Let user save their initials and high score
 *  - [ ] Redirect to high scores page
 * 
 * @see https://www.w3schools.com/jsref/prop_text_value.asp
 * @see https://www.w3schools.com/jsref/prop_win_localstorage.asp
 * @see https://www.w3schools.com/howto/howto_js_redirect_webpage.asp
 */
function saveHighscore() {

  /*
    @TODO: write your function code here
  */

}

// user clicks button to submit initials
submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;