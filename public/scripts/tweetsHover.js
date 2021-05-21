$(document).ready(function () {
  // --- our code goes here ---

  $("main.container").on('mouseover', 'section.tweets', function () {
    $(this).css({ "box-shadow": "6px 6px grey" });
  });
  $("main.container").on('mouseout', 'section.tweets', function () {
    $(this).css({ "box-shadow": "0px 0px" });
  });

  $("main.container").on('mouseover', "footer.tweets i", function () {
    $(this).css({ "color": "orange" });
  });
  $("main.container").on('mouseout', "footer.tweets i", function () {
    $(this).css({ "color": "#4056A1" });
  });



});