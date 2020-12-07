import cards from './cards.data';
import * as constants from './constants';
import startCategory from './entry_category_cards_controller';
import cardResponseOnClick from './cards_controller_trainMode';

const dashboardCardsArray = Array.from(document.querySelectorAll('.cards-dashboard__card'));

let index = 0;

function createInitialCards(mode) {
    dashboardCardsArray.forEach(card => {
        const refToCard = card;
        refToCard.classList.remove("train-mode", "play-mode");
        refToCard.classList.add("init");

        const header = refToCard.querySelector('h2')
        header.textContent = cards[constants.HEADERS_ARRAY_INDEX][index];
        index += 1;
        const cardPic = refToCard.querySelector('img');
        cardPic.src = `./${cards[index][constants.EVERY_THIRD_CATEGORY_OBJECT].image}`;

        card.addEventListener('click', function initCardClickListener (e) {
            if(!(card.classList.contains('init'))) {
               cardResponseOnClick(e, dashboardCardsArray);
            } else {
               startCategory(cards[constants.HEADERS_ARRAY_INDEX].indexOf(card.getElementsByTagName('h2')[0].textContent), mode, dashboardCardsArray);
            }
        });
    });
 
    index = 0;
}

export default createInitialCards;