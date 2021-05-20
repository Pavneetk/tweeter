$(document).ready(function () {
  // --- our code goes here ---

  $("section.tweets").hover(function () {

    $(this).css({"box-shadow" : "6px 6px grey"});

  }, function () {

    $(this).css({"box-shadow" : "0px 0px"});


  });
  $("footer.tweets i").hover(function () {

    $(this).css({"color" : "orange"});

  }, function () {

    $(this).css({"color" : "#4056A1"});

  });





});