const cards = document.querySelectorAll("div .card");

function showCards() {
  const bottom = (window.innerHeight / 5) * 4;
 

  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < bottom) {
      card.classList.add("mostrar");
    } else {
      card.classList.remove("mostrar");
    }
  });
}
window.addEventListener("scroll", showCards);
showCards();
