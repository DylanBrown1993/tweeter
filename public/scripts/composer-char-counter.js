$(document).ready(function() {
  const maxChars = 140;
  const counter = $('.counter');
  const tweetText = $('#tweet-text');

  tweetText.on('input', function() {
    const charsLeft = maxChars - tweetText.val().length;
    counter.text(charsLeft);
    
    if (charsLeft <= 0) {
      counter.css('color', 'red');
    } else {
      counter.css('color', '');
    }
  });
});

