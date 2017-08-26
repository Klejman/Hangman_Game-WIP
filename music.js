// JavaQuery function that wraps everything

$(document).ready(function() {

  // Gets Link for Theme Song
  var audioElement = document.createElement("audio");
  audioElement.setAttribute("src", "assets/theme-song.mp3");

  // Theme Button
  $(".theme-button").on("click", function() {
    console.log("theme button clicked")
    audioElement.play();

  });

  $(".pause-button").on("click", function() {
    console.log("pause button clicked")
    audioElement.pause();
  });

  });
