/**
 * I am using java script because i couldn't find any other means to control the volume of the background audio for my game
 */

 let audio = document.getElementById("player");
 audio.volume = 0.02;

 // Besides i am adding the below function to make sure that the background audio keeps playing everytime the page is reloaded 

 window.onload=function(){
    audio.play();
  }