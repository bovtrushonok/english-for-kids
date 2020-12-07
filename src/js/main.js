import createInitialCards from './initial_create_cards';
import createMenu from './create_menu';
import changeCardClassPlayMode from './change_class_cards_controller';

const App = {
    elements: {
        menu: null,
        dashboard:  null,
        dashboardCardsArray: null,
        dashboardCard: null,
        isPlayMode: false,
        gameProgressBar: null,
    },

    init() { 
        createMenu();
        this.createMainPageCards();
    },

    changePlayMode(mode) {
        this.elements.isPlayMode = mode;
        changeCardClassPlayMode(mode);
    },

    createMainPageCards() {
        createInitialCards(this.elements.isPlayMode);
    },
};

export default App