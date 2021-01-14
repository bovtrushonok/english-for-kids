import App from './main';
import * as constants from './constants';
import cards from './cards.data';
import startCategory from './entry_category_cards_controller';

const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuWrapper = document.querySelector('.burger-menu-wrapper');
const burgerMenuItems = document.querySelector('.burger-header-menu');
const overlay = document.querySelector('.modal-overlay');
const dashboardCardsArray = document.querySelectorAll('.cards-dashboard__card');

let clickCounter = constants.INITIAL_CLICK_COUNTER;

function closeMenu() {
  clickCounter += 1;

  burgerMenu.style.transform = 'rotate(180deg)';
  burgerMenuWrapper.classList.remove('animateSlideIn');
  burgerMenuWrapper.style.left = '0';
  burgerMenuWrapper.classList.add('animateSlideOut');

  setTimeout(() => {
    overlay.classList.add('hidden');
    burgerMenuWrapper.style.left = constants.NEGATIVE_BURGER_WRAPPER_WIDTH;
    burgerMenu.style.zIndex = constants.BASE_ZINDEX;
    burgerMenu.style.position = 'static';

    return true;
  }, 1000);

  document.body.style.height = 'auto';
  document.body.style.overflowY = 'visible';
}

burgerMenu.addEventListener('click', (e) => {
  e.stopPropagation();

  if (clickCounter % 2 === 0) {
    return closeMenu();
  }

  clickCounter += 1;

  burgerMenu.style.transform = 'rotate(90deg)';
  burgerMenu.style.zIndex = constants.ZINDEX_FOR_CLICK;
  burgerMenu.style.position = 'absolute';

  burgerMenuWrapper.classList.remove('animateSlideOut');
  burgerMenuWrapper.classList.add('animateSlideIn');

  overlay.classList.remove('hidden');
  document.body.style.height = '100vh';
  document.body.style.overflowY = 'hidden';

  return true;
});

burgerMenuItems.addEventListener('click', (e) => {
  if (e.target.textContent === 'Main page') {
    App.createMainPageCards();
  } else {
    startCategory(cards[constants.HEADERS_ARRAY_INDEX]
      .indexOf(e.target.textContent), dashboardCardsArray);
  }

  closeMenu();
});
