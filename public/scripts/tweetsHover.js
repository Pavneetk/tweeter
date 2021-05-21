$(document).ready(function () {
  // --- our code goes here ---
//dynamic hover css for tweet box
  $("main.container").on('mouseover', 'section.tweets', function () {
    $(this).css({ "box-shadow": "6px 6px grey" });
  });
  $("main.container").on('mouseout', 'section.tweets', function () {
    $(this).css({ "box-shadow": "0px 0px" });
  });
//dynamic hover css for footer links
  $("main.container").on('mouseover', "footer.tweets i", function () {
    $(this).css({ "color": "orange" });
  });
  $("main.container").on('mouseout', "footer.tweets i", function () {
    $(this).css({ "color": "#4056A1" });
  });

});