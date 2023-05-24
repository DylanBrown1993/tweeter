$(document).ready(function() {
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
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png",
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
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense, donc je suis"
      },
      "created_at": 1461113959088
    }
  ];

  renderTweets(data);

  $("form").on("submit", function(event) {
    event.preventDefault();
  
    const Formdata = $(this).serialize();
  
    $.post("/tweets", $(this).serialize());
  
  });

  }); 



  
