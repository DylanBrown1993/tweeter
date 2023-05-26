/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

/* Function for generating the tweets */
const createTweetElement = function(tweet) {
  const $tweetTime = timeago.format(tweet.created_at);
  const $tweet = $(
    `<article class="tweet">
    <header>
      <div class="top-left">
        <span class="image">
          <img src="${tweet.user.avatars}" alt="user-avatar" />
        </span>
        <span class = "username">
          ${tweet.user.name}
        </span>
      </div>
      <div class="handle">
        <h2>${tweet.user.handle}</h2>
      </div>
    </header>
    <div class="tweet-line">
      <h4 class="tweet-words">${escape(tweet.content.text)}</h4>
    </div>
    <footer>
      <div class="bottom">
      <span class="time">
        <h6 class="time-length">${$tweetTime}</h6>
      </span>
        <span class="icons">
          <span class="heart">
            <i class="fa-solid fa-heart"></i>
          </span>
          <span class="retweet">
            <i class="fa-solid fa-retweet"></i>
          </span>
          <span class="flag">
            <i class="fa-solid fa-flag"></i>
          </span>
        </span>
      </div>
    </footer>
  </article>`
  );
  return $tweet
};

/* Rendering existing tweets to display on the timeline */
const renderTweets = function(tweets) {
  const $tweetsContainer = $('#tweets-container');
  $tweetsContainer.empty();
  for (const tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $tweetsContainer.prepend($tweet);
  }
};

/* Sends an AJAX request to /tweets, which if successfulls calls renderTweets */
function loadTweets () {
  $.ajax({
    url: "/tweets",
    method: "GET",
    success: function (data){
      renderTweets(data);
    }
  })
}

/* Validates the tweet length and returns an appropriate error message */
const validation = function(tweet) {
  const $errorContainer = $("#error-container");
  if (tweet.length > 140) {
    const errorMessage = "🐸Too many ribbits...err, letters🐸";
    $errorContainer.text(errorMessage).slideDown();
    return false;
  } 
  if (!tweet) {
    const errorMessage = "🐸Ribbit Ribbit, please write a ribbit🐸";
    $errorContainer.text(errorMessage).slideDown();
    return false;
  }
  return true;
};

/* Sends an AJAX request to /tweets, which if successful loads all tweets, clears the form, and resets the counter */
const submitTweet = function(tweet) {
  $.post("/tweets", tweet)
  .then(function () {
    loadTweets();
    $("textarea").val("");
    $(".counter").text("140");
  })
}

/* Prevents potential errors from certain characters and code in tweets */
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

/* Sets up an event listener for the form submission, retrieves the tweet content, performs validation, and then submits the tweet data.  */
$(document).ready(function() {

loadTweets();

$("form").on("submit", function(event) {
  event.preventDefault();
  const tweet = $("textarea").val();
  const $errorContainer = $("#error-container");
  $errorContainer.hide();
  if(validation(tweet)) {
    const Formdata = $(this).serialize();
    submitTweet(Formdata);
  };
});
});
