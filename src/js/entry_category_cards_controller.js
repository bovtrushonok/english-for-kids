import cards from './cards.data';

let index = 0;

function startCategory(categoryNumber, mode, array) {
    array.forEach(card => {
        card.classList.remove("init");
      
        if (mode === 'true') {
            card.classList.add("play-mode");
        } else {
            card.classList.add("train-mode");
        };
        
        const img = card.querySelector('img');
        img.src = `./${cards[categoryNumber + 1][index].image}`;
        
        const word = card.querySelector('p');
        word.textContent = `${cards[categoryNumber + 1][index].word}`;

        const header = card.querySelector('h2');
        header.textContent = categoryNumber + 1;
        
        index += 1;

        return true;
    });
    index = 0;
}

export default startCategory;