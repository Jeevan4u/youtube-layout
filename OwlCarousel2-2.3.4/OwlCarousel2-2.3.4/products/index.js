var cards = document.querySelectorAll("#cards");


console.log(cards)

for (var i=0; i<cards.length; i++) {
    cards[i].addEventListener('click', function(e) {
      var link = this.querySelector(".cardmainlink");
      link.click();
    }, false);
  }