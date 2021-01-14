import cards from './cards.data';

function animateFlip(clickedCard, category, index) {
  if (!clickedCard.classList.contains('backwards')) {
    return;
  }

  const refToCard = clickedCard;

  refToCard.classList.remove('backwards');
  refToCard.classList.add('forwards');
  refToCard.querySelector('p').textContent = cards[category][index].word;

  setTimeout(() => {
    refToCard.classList.remove('forwards');
  }, 1000);
}

function cardResponseOnClick(event, cardsArray) {
  const clickedCard = event.target.classList.contains('cards-dashboard__card') ? event.target : event.target.parentNode;

  if (clickedCard.classList.contains('play-mode')) {
    return;
  }

  const index = cardsArray.indexOf(clickedCard);
  const category = clickedCard.querySelector('h2').textContent;

  if (!event.target.classList.contains('flip')) {
    const audio = document.createElement('audio');

    audio.src = `./audio/${clickedCard.querySelector('p').textContent}.mp3`;
    audio.currentTime = 0;
    audio.play();
  } else {
    clickedCard.classList.add('backwards');
    clickedCard.querySelector('p').textContent = cards[category][index].translation;

    clickedCard.addEventListener('mouseleave', () => {
      animateFlip(clickedCard, clickedCard.querySelector('h2').textContent, index);
    });
  }
}

export default cardResponseOnClick;
