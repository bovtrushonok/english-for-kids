import cards from './cards.data';
import * as constants from './constants';
import App from './main';

const gameStartButton = document.querySelector('.game-start-button');
const cardsArray = Array.from(document.querySelectorAll('.cards-dashboard__card'));
const progressBar = document.querySelector('.progress-bar');
const dashboard = document.querySelector('.cards-dashboard');

const audioCollection = [];
const indexArray = [];

function randomInteger(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function createIndexArray() {
  for (let i = 0; i < constants.CATEGORIES_ARRAY_LENGTH; i += 1) {
    const index = randomInteger(0, constants.CATEGORIES_ARRAY_LAST_INDEX);

    if (indexArray.includes(index)) {
      randomInteger(0, constants.CATEGORIES_ARRAY_LAST_INDEX);
      i -= 1;
    } else {
      indexArray.push(index);
    }
  }
}

function createAudioCollection() {
  indexArray.forEach((index) => {
    const category = cardsArray[1].querySelector('h2').textContent;
    const audio = document.createElement('audio');

    audio.src = cards[category][index].audioSrc;
    audioCollection.push(audio);
  });
}

let index = 0;

function startCurrentLevel() {
  function checkAnswer(currentItem) {
    dashboard.onclick = (e) => {
      if (App.elements.isPlayMode === 'false') {
        return;
      }
      const clickedCard = e.target.classList.contains('cards-dashboard__card') ? e.target : e.target.parentNode;
      const audio = document.createElement('audio');

      if (cardsArray.indexOf(clickedCard) === currentItem) {
        progressBar.innerHTML = `${progressBar.innerHTML}<span class="material-icons correct"> grade</span>`;
        clickedCard.style.backgroundColor = 'yellow';
        audio.src = 'audio/correct.mp3';
        audio.play();

        index += 1;

        if (index < constants.CARDS_IN_CATEGORY) {
          startCurrentLevel();
        } else {
          cardsArray.forEach((card) => {
            const refToCard = card;

            refToCard.style.backgroundColor = '';
          });
          gameStartButton.classList.remove('play-mode');
          progressBar.classList.remove('play-mode');
          progressBar.innerHTML = '';
          App.createMainPageCards();
        }
      } else {
        progressBar.innerHTML = `${progressBar.innerHTML}<span class="material-icons incorrect"> grade</span>`;
        audio.src = 'audio/error.mp3';
        audio.play();
      }
    };
  }

  audioCollection[index].play();
  checkAnswer(indexArray[index]);
}

function startGame() {
  if (!App.elements.isPlayMode) {
    return;
  }

  createIndexArray();
  createAudioCollection();
  startCurrentLevel();
}

gameStartButton.addEventListener('click', startGame);
