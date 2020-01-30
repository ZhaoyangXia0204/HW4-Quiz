
var highscoreList = document.getElementById("highscores");
var highscoresUsernam = JSON.parse(window.localStorage.getItem('scoreUser'));
//var Hs = JSON.stringify(highscoresUsernam);






//highscores.push(highscore, username);



function printHighscores() {
  //var highscores = [];
  //highscoreList.innerHTML = "";
  //highscores.push(highscore, username);
  var highscoresUsernam = JSON.parse(window.localStorage.getItem('scoreUser'));
  console.log(highscoresUsernam);
  var nameScore = highscoresUsernam.sort(function(a,b){
    return a.Score - b.username
  })
  console.log(nameScore);
  var allSs = JSON.stringify(nameScore);

  console.log(allSs);
  
  


    var li = document.createElement("li");

    li.textContent = allSs;
    
    
    highscoreList.appendChild(li);
  

    
  }



  function clearHighscores() {
 
    localStorage.clear();
    document.getElementById("highscores").innerHTML = "";
    /*
      @TODO: write the rest of your function code here
    */
  
    // reload window
    //window.location.reload();
  
  }
  
  
  // user clicks button to clear high scores
  document.getElementById("clear").onclick = clearHighscores;
  
  // run function when page loads
  printHighscores();
  