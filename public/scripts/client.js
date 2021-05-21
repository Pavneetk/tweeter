/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function () {

  //returns full HTML structure a single tweet box
  function createTweetElement(tweetData) {
    return $(`
      <section class="tweets">
        <article>
          <header class="tweets">
            <div>
              <img src="${tweetData.user.avatars}">
              <span>${tweetData.user.name}</span>
            </div>
              <span>${tweetData.user.handle}</span>
          </header>
          <p>
            ${tweetData.content.text}
          </p>
          <footer class="tweets">
            <span>${timeago.format(tweetData.created_at)}</span>
            <div>
              <i class="fas fa-flag"></i>
              <i class="fas fa-retweet"></i>
              <i class="fas fa-heart"></i>
            </div>
          </footer>
        </article>
      </section>

    `)
  };

  //loop through each obj element in the array and add the returned HTML structure to the main container
  function renderTweets(tweetsData) {

    tweetsData.forEach(element => {
      const $tweet = createTweetElement(element);
      $('main.container').append($tweet);
    });

  }

  //ajax get request to server returns tweets data and call rendertweets functiong with it
  function loadData() {
    $.ajax({
      url: "/tweets",
      method: "GET",
    }).then((result) => {
      renderTweets(result);
    })
  };

  //initiates tweet data loading on page load
  loadData();


  //adds newly created tweets to main container using ajax get request and only added the last element to the page
  function addNewTweet() {
    $.ajax({
      url: "/tweets",
      method: "GET",
    }).then((result) => {
      const $tweet = createTweetElement(result[result.length - 1]);
      $('main.container').append($tweet);
    })


  }
  //returns safeHTML code
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };


  //ajax event handler for tweet submit button
  $("form").submit(function (event) {
    event.preventDefault()
    $("div.error").css({ "display": "none" });
    let text = $(this).children("textarea").val();
    let safeHTML = escape(text);

      //message validating before ajax request
    if ($(this).children("textarea").val().length > 140) {
      $("div.error").css({ "display": "flex" });
      $("div.error span").text("Message exceeds character limit!");
    } else if ($(this).children("textarea").val() === "") {
      $("div.error").css({ "display": "flex" });
      $("div.error span").text("Message is empty!");
    } else {
      $.ajax({
        url: "/tweets",
        method: "POST",
        data: `text=${safeHTML}`,

      }).then(() => {//once new message is added to the database, clear message field, reset counter and add the newly created tweet to the main container
        $("section.new-tweet textarea").val("");
        $("section.new-tweet textarea").siblings(".buttonCount").children(".counter").val(140);
        addNewTweet();

      });

    }

  });

































});
