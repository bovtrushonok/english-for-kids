import App from './main';

const gameChangeModeButton = document.querySelector(".game-change-mode-btn");

function setMode() {
    gameChangeModeButton.classList.toggle("btn_active");
    const mode = (gameChangeModeButton.classList.contains("btn_active")); 
    const changeModeButtonEvent = new CustomEvent("changeMode", {
        bubbles: true,
        detail: { mode: `${mode}` },
    }); 
    gameChangeModeButton.dispatchEvent(changeModeButtonEvent);   
};

document.addEventListener("changeMode",  (event) => {
    return App.changePlayMode(event.detail.mode);
});

gameChangeModeButton.addEventListener('click', () => {
    setMode();
});

export default gameChangeModeButton;