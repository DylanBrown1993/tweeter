$(document).ready(function() {
  const createTweetElement = function(tweet) {
    const $tweet = $(`
      <article class="tweet">
        <header>
          <img src="${escape(tweet.user.avatars)}" alt="User Avatar">
          <div class="tweet-header-content">
            <div>
              <h3 class="tweet-author">${escape(tweet.user.name)}</h3>
            </div>
            <div>
              <span class="tweet-handle">${escape(tweet.user.handle)}</span>
            </div>
          </div>
        </header>
        <div class="tweet-content">
          <p>${escape(tweet.content.text)}</p>
        </div>
        <footer>
          <span class="tweet-timestamp" data-time="${tweet.created_at}">${formatTimestamp(tweet.created_at)}</span>
          <div class="tweet-actions">
            <i class="far fa-comment"></i>
            <i class="fas fa-retweet"></i>
            <i class="far fa-heart"></i>
          </div>
        </footer>
      </article>
    `);
    return $tweet;
  };

  const renderTweets = function(tweets) {
    const $tweetsContainer = $('#tweets-container');
    $tweetsContainer.empty();
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $tweetsContainer.append($tweet);
    }
    // Render timeago after tweets are rendered
    timeago.render($('.tweet-timestamp'));
  };

  const loadTweets = function() {
    $.getJSON("/tweets")
      .then(function(data) {
        renderTweets(data);
      });
  };

  const submitTweet = function(tweetText) {
    $.post("/tweets", { text: tweetText })
      .then(function() {
        loadTweets();
      });
  };

  $("form").on("submit", function(event) {
    event.preventDefault();

    const tweetText = $("#tweet-text").val();
    const $errorContainer = $("#error-container");

    // Hide error message
    $errorContainer.hide();

    // Perform validation checks
    if (!tweetText) {
      const errorMessage = "Error: You gotta write a tweet!";
      $errorContainer.text(errorMessage).slideDown();
      return;
    }

    if (tweetText.length > 140) {
      const errorMessage = "Error: Too many letters, put less letters.";
      $errorContainer.text(errorMessage).slideDown();
      return;
    }

    // Validation passed, submit the tweet
    submitTweet(tweetText);

    // Reset the form after submitting
    $(this).trigger("reset");
  });

  // Load tweets on initial page load
  loadTweets();

  // Function to escape special characters in HTML
  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  // Function to format timestamp using timeago
  const formatTimestamp = function(timestamp) {
    const date = new Date(timestamp);
    return date.toISOString();
  };
});
