/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

function createTweetElement(tweetData){
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


function renderTweets(tweetsData){

tweetsData.forEach(element => {
  let $tweet = createTweetElement(element);
  $('main.container').append($tweet);
});

}

renderTweets(data);


































});
