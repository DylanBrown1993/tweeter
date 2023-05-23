$(document).ready(function() {
  $("#tweet-text").on("input", function() {
    let maxLength = 140;
    let currentLength = $(this).val().length;
    let remainingLength = maxLength - currentLength;

    let counterElement = $(this).siblings("div").find(".counter");
    counterElement.text(remainingLength);

    if (remainingLength <= 0) {
      counterElement.addClass("invalid");
    } else {
      counterElement.removeClass("invalid");
    }
  });
});

