$(document).ready(function() {
  // Function to create a tweet element
  const createTweetElement = function(tweet) {
    const $tweet = $(`
      <article class="tweet">
        <header>
          <img src="${tweet.user.avatars}" alt="User Avatar">
          <div class="tweet-header-content">
            <div>
              <h3 class="tweet-author">${tweet.user.name}</h3>
            </div>
            <div>
              <span class="tweet-handle">${tweet.user.handle}</span>
            </div>
          </div>
        </header>
        <div class="tweet-content">
          <p>${tweet.content.text}</p>
        </div>
        <footer>
          <span class="tweet-timestamp">${tweet.created_at}</span>
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

  // Function to render multiple tweets
  const renderTweets = function(tweets) {
    const $tweetsContainer = $('#tweets-container');
    $tweetsContainer.empty();
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $tweetsContainer.append($tweet);
    }
  };

  const data = [
    {
      "user": {
        "name": "Jinkus",
        "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@KnuckleSalad"
      },
      "content": {
        "text": "Streaming at 12:30, life is good and Dylan is my BFF"
      },
      "created_at": "May 23, 2023 12:34 PM" 
    },
    {
      "user": {
        "name": "Seam Henderson",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@SmokeTabby"
      },
      "content": {
        "text": "Dylan Brown is a really cool guy!"
      },
      "created_at": "May 23, 2023 12:30 PM" 
    }
  ];

  renderTweets(data);

  // Add event listener for form submit
  $('#tweet-form').submit(function(event) {
    event.preventDefault();

    // Serialize the form data
    const formData = $(this).serialize();

    // Send the AJAX POST request
    $.post('/tweets', formData)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  });
});




