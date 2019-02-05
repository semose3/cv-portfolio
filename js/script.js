// jshint esversion:6

// MAIN HEADER FADEin FADEout functions
function mainHeaderFadeIn(){

  $("#cloud-top, #cloud-bottom").delay(500).animate({
    opacity: 1

  }, 2000);

  $("#cloud-bottom").delay(700).animate({
    opacity: 1

  }, 2700);

  $("#main-header h2").delay(2000).animate({
    opacity: 1
  }, 2000);

  $("#main-header p").delay(3500).animate({
    opacity: 1
  }, 2000);

}

function mainHeaderFadeOut(){
  $("#cloud-top, #cloud-bottom").delay(500).animate({
    opacity: 0
  }, 2000);

  $("#cloud-bottom").delay(700).animate({
    opacity: 0
  }, 2700);

  $("#main-header h2").delay(2000).animate({
    opacity: 0
  }, 2000);

  $("#main-header p").delay(3500).animate({
    opacity: 0
  }, 2000);
}


// NAVIGATION bar
function showNav(){

}

function hideNav(){

}
// EDUCATION VARIABLES
var educationEl = $("#about-education img");
var carouselEL = $(".carousel-item");




// FINDING POSITION
let about = $("about");
let skills = $("#skills");
let skillsPosition = skills.position().top;

console.log(skillsPosition);

$(document).ready(()=>{
  mainHeaderFadeIn();
});

// CHECK THE WIDTH OF A SCREEN/DEVICE
width = $(window).width();
console.log("width: " + width);


// $(window).scroll(function(){
//
// });



$(window).scroll(function(){
  let scrollPosition = $(window).scrollTop();
  console.log("Scroll position" + scrollPosition);

if(scrollPosition > 700){
  $("#navigation-bar").delay().animate({
    opacity: 1
  }, 1000);
}


  if($(this).scrollTop() > skillsPosition-200){
    $("#skills p").delay().animate({opacity: 1});
    $("#skills #html-img").delay(500).animate({opacity: 1}, 500);
    $("#skills #css-img").delay(1300).animate({opacity: 1}, 500);
    $("#skills #js-img").delay(2000).animate({opacity: 1}, 500);
    $("#skills #nodejs-img").delay(2800).animate({opacity: 1}, 500);

  }
});
