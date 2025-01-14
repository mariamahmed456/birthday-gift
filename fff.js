window.onload = function() {
  // Remove the 'container' class from the body element
  document.body.classList.remove("container");

  // Play the audio and unmute it
  var audio = document.querySelector('audio');
  audio.play();
  audio.muted = false; // Unmute after play starts
};

