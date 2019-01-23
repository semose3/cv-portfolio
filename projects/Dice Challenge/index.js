var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomDiceImage = "dice" + randomNumber1 +".png";
var randomImageSource1 = "images/" + randomDiceImage;

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;

console.log("random number 1: " + randomNumber1);
console.log("random number 2: " + randomNumber2);


var img1 = document.querySelector("img.img1");
var img2 = document.querySelector("img.img2");

img1.setAttribute("src", randomImageSource1);
img2.setAttribute("src", randomImageSource2);


var h1 = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  h1.textContent = "Player 1 is Winner!"
} else if (randomNumber1 < randomNumber2) {
  h1.textContent = "Player 2 is Winner!"
} else{
  
  h1.textContent = "Draw!"
}
