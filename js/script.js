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



// EDUCATION VARIABLES
var educationEl = $("#about-education img");
var carouselEL = $(".carousel-item");




// FINDING POSITION
var skills = $("#skills");
var position = skills.position().top;

console.log(position);

$(document).ready(()=>{
  mainHeaderFadeIn();
});

// CHECK THE WIDTH OF A SCREEN/DEVICE
width = $(window).width();
console.log("width: " + width);




$(window).scroll(function(){

  if($(this).scrollTop() > position-200){
    $("#skills p").delay().animate({opacity: 1});
    $("#skills #html-img").delay(500).animate({opacity: 1}, 500);
    $("#skills #css-img").delay(1300).animate({opacity: 1}, 500);
    $("#skills #js-img").delay(2000).animate({opacity: 1}, 500);
    $("#skills #nodejs-img").delay(2800).animate({opacity: 1}, 500);

  }
});
