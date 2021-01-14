import * as constants from './constants';
import cards from './cards.data';

const burgerMenuItems = document.querySelector('.burger-header-menu');
let index = -1;

function createMenu() {
  function getListContent() {
    const fragment = new DocumentFragment();

    for (let i = 0; i <= constants.CATEGORIES_ARRAY_LENGTH; i += 1) {
      const li = document.createElement('li');

      li.classList.add('burger-header-menu__item');

      fragment.append(li);
    }

    return fragment;
  }

  burgerMenuItems.append(getListContent());

  Array.from(burgerMenuItems.children).forEach((menuItem) => {
    const refToMenuItem = menuItem;

    if (index === -1) {
      refToMenuItem.textContent = 'Main page';
      refToMenuItem.classList.add('active');
    } else {
      refToMenuItem.textContent = cards[constants.HEADERS_ARRAY_INDEX][index];
    }

    index += 1;
  });
}

export default createMenu;
