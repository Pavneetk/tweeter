/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function () {


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

    `)};


  function renderTweets(tweetsData) {

    tweetsData.forEach(element => {
      const $tweet = createTweetElement(element);
      $('main.container').append($tweet);
    });

  }
  
  function loadData() {
    $.ajax({
      url: "/tweets",
      method: "GET",
    }).then((result) => {
    renderTweets(result);
    })
  };

loadData();



  $("form").submit(function (event) {
    event.preventDefault()
    
    if($(this).children("textarea").val().length > 140) {
      alert("Message exceeds character limit!");
    } else if($(this).children("textarea").val() === "") {
      alert("Message is empty!")
    } else {
     $.ajax({
       url: "/tweets",
       method: "POST",
       data: $(this).children("textarea").serialize(),
     });
    }

  });

































});
