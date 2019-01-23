var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var index = 0;
var started = false;
// Game Over
function gameOver(){
  var audioWrong = new Audio("sounds/wrong.mp3");
  audioWrong.play();
  $("body").addClass("game-over");
  setTimeout(function(){
    $("body").removeClass("game-over");
    $("h1").text("Game Over, Press Any Key to Restart!");
  }, 200);
}

// Start over
function restart(){
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
}

// Game Start - Event Handler
if(started === false){
  $(window).keypress(function(){
    if(level<1){
      nextSequence();
      started=true;
    }
  });
}


// Next Random Sequence
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  playSound(randomChosenColor);
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);

  level++;
  $("#level-title").text("Level " + level);
}

// User Click Events
$(".btn").on("click", function(event) {
  var userChosenColor = event.target.id;
  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);
  animatePress(userChosenColor)
  checkAnwser(userClickedPattern.length-1); //Last index o
});

// Check User Pattern Anwser
function checkAnwser(currentLevel){
if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
  if(gamePattern.length === userClickedPattern.length){
    setTimeout(function(){
      userClickedPattern = [];
      nextSequence();
    }, 1000);
  }
}else{
  started=false;
  gameOver();
  restart();
}
}
// Sounds on click and nextSequence
function playSound(color) {
  var audio = new Audio("sounds/" + color + ".mp3");
  audio.play();
}

// button animations
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
