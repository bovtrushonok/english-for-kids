import '../css/style.css';
import '../css/style.scss';
import App from './main';
import './set_game_mode';
import './menu_controller';
import './constants';
import './cards.data';
import './initial_create_cards';
import './entry_category_cards_controller';
import './cards_controller_trainMode';
import './cards_controller_playMode';
import './create_menu';

window.addEventListener('load', App.init());