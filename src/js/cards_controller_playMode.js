import cards from './cards.data';
import App from './main'

const gameStartButton = document.querySelector('.game-start-button');
const cardsArray = Array.from(document.querySelectorAll('.cards-dashboard__card'));

function startGame() {
    if(!App.elements.isPlayMode) {
        return;
    }

    const audioCollection = [];
    let index = 0;

    cardsArray.forEach(card => {
        const category = card.querySelector('h2').textContent;
        const audio = document.createElement('audio');
        audio.src = cards[category][index].audioSrc;
        audioCollection.push(audio);
        index+=1;
    });

    console.log(audioCollection);

    audioCollection.forEach(audio => {
        const refToAudio = audio;
        refToAudio.currentTime = 0;
        refToAudio.play();
    });
}

gameStartButton.addEventListener('click', startGame)

