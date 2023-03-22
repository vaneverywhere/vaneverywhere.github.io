window.addEventListener("scroll", function() {
  var cards = document.querySelectorAll(".card");
  var top = window.pageYOffset;
  var bottom = top + window.innerHeight;
  cards.forEach(function(card) {
    var position = card.getBoundingClientRect();
    if (position.top < bottom && position.bottom > top) {
      card.classList.add("fade-in");
    }
  });
});