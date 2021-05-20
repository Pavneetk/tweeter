$(document).ready(function() {
  // --- our code goes here ---
const charMax = 140;
let charCount = 0;

  $("#tweet-text").on('input', function(e) {
    charCount = charMax - this.value.length;
    if(charCount < 0 ) {
      $(this).siblings(".buttonCount").children(".counter").css({"color" : "red"});
    } else {
      $(this).siblings(".buttonCount").children(".counter").css({"color" : "black"});
    }
    $(this).siblings(".buttonCount").children(".counter").val(charCount);
  });
  




});

