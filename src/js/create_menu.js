import * as constants from './constants';
import cards from './cards.data';

const burgerMenuItems = document.querySelector('.burger-header-menu');
let index = -1;

function createMenu() {
    Array.from(burgerMenuItems.children).forEach(menuItem => {
        const refToMenuItem = menuItem;
        if(index === -1) {
            refToMenuItem.textContent = 'Main page';
        } else {
            refToMenuItem.textContent = cards[constants.HEADERS_ARRAY_INDEX][index];
        }
       
        index += 1;
    });
}

export default createMenu;