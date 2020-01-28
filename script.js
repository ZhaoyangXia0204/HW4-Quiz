var questionsEl = document.querySelector(".questions");
var mainEl = document.querySelector("#main");
var highScoreEl = document.querySelector(".highscore");
var timeEl = document.querySelector(".time");
var Start = document.querySelector("#start");

var rorw = document.querySelector("#rorw");

Start.addEventListener("click", function(){
  mainEl.innerHTML = "";
  setTimer();

}
);

var questions = [
    "Who scored the most points in one game?",
    "What player has the most career assists?",
    "Who won the most career NBA championships as player?",
    "How many points did 'Black Manmba' score in his last game?"
];
var ans1 = [
  "<button>A: Micheal Jordan</button>",
  "<button>B: Wilt Chamberlain</button>",
  "<button>C: Kobe Bryant</button>",
  "<button>D: Lebron James</button>",
]

var ans2 = [
  "<button>A: Chris Paul</button>",
  "<button>B: Allen Iverson</button>",
  "<button>C: Oscar Robertson</button>",
  "<button>D: John Stockton</button>",
];
var ans3 = [
  "<button>A: Bill Russel</button>",
  "<button>B: Micheal Jordan</button>",
  "<button>C: Wilt Chamberlain</button>",
  "<button>D: John Havlicek</button>",
];
var ans4 = [
  "<button>A: 61</button>",
  "<button>B: 60</button>",
  "<button>C: 59</button>",
  "<button>D: 58</button>",
];
var resultAns = ["b","d", "a", "b"];

var secondsLeft = 100;


function setTimer(){
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time left : " + secondsLeft;
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          alert("Times up!!")
        }
    
      }, 1000);
}

var Score=0;
function score(){
  for(i=0; i < questions.length; i++){
    if (anyAns === resultAns){
      Score++;
      var rorw = document.createTextNode("right");
    }
    else{
      var rorw = document.createTextNode("wrong");
    }
  }
}



