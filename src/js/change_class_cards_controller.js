const dashboardCardsArray = Array.from(document.querySelectorAll('.cards-dashboard__card'));
const startGameButton = document.querySelector('.game-start-button');

function changeCardClassPlayMode(mode) {
    dashboardCardsArray.forEach(card => {
        if (card.classList.contains("init")) {
            return;
        };
        
        if (mode === 'true') {
            card.classList.remove("train-mode");
            card.classList.add("play-mode");
            startGameButton.classList.add("play-mode");
        } else {
            card.classList.remove("play-mode");
            startGameButton.classList.remove("play-mode");
            card.classList.add("train-mode");
        }
    });
    return mode;
}

export default changeCardClassPlayMode;

