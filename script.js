window.addEventListener("scroll", function() {
  var cards = document.querySelectorAll(".card");
  var top = window.pageYOffset;
  var bottom = top + window.innerHeight;
  var threshold = 450; // adjust this value to change the threshold
  cards.forEach(function(card) {
    var position = card.getBoundingClientRect();
    if (position.top < bottom - threshold && position.bottom > top) {
      card.classList.add("fade-in");
    }
  });
});