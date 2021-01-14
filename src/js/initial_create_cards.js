import cards from './cards.data';
import * as constants from './constants';
import startCategory from './entry_category_cards_controller';
import cardResponseOnClick from './cards_controller_trainMode';

const dashboardCardsArray = Array.from(document.querySelectorAll('.cards-dashboard__card'));

let index = 0;

function getCardContent() {
  const fragment = new DocumentFragment();

  const image = document.createElement('img');
  const header = document.createElement('h2');
  const paragraph = document.createElement('p');
  const flipIcon = document.createElement('span');

  flipIcon.classList.add('material-icons');
  flipIcon.classList.add('flip');
  flipIcon.textContent = 'autorenew';

  fragment.append(image);
  fragment.append(header);
  fragment.append(paragraph);
  fragment.append(flipIcon);

  return fragment;
}

function createInitialCards() {
  dashboardCardsArray.forEach((card) => {
    const refToCard = card;

    card.append(getCardContent());

    refToCard.classList.remove('train-mode', 'play-mode');
    refToCard.classList.add('init');

    const header = refToCard.querySelector('h2');
    header.textContent = cards[constants.HEADERS_ARRAY_INDEX][index];
    header.classList.add('dashboard-card__header');

    index += 1;

    const cardPic = refToCard.querySelector('img');
    cardPic.src = `./${cards[index][constants.EVERY_THIRD_CATEGORY_OBJECT].image}`;
    cardPic.classList.add('dashboard-card__img');

    const paragraph = refToCard.querySelector('p');
    paragraph.classList.add('dashboard-card__word');

    card.addEventListener('click', (e) => {
      if (!(card.classList.contains('init'))) {
        cardResponseOnClick(e, dashboardCardsArray);
      } else {
        startCategory(cards[constants.HEADERS_ARRAY_INDEX].indexOf(card.getElementsByTagName('h2')[0].textContent), dashboardCardsArray);
      }
    });
  });

  index = 0;
}

export default createInitialCards;
