
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

  var allSs = JSON.stringify(highscoresUsernam);

  console.log(allSs);
  
  


    var li = document.createElement("li");

    li.textContent = allSs;
    
    
    highscoreList.appendChild(li);
  
  //
    /*
      @TODO: write your function code here
    */
    
  }


 
  
  /**
   * Function to clear high scores
   * 
   * @description
   * This function will:
   *  - [ ] Clear all the high scores
   *  - [x] Reload the window
   * 
   * @see https://www.w3schools.com/jsref/prop_win_localstorage.asp
   */
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
  