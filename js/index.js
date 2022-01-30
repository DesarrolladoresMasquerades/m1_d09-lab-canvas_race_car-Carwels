window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    const myGame = new Game();
    myGame.init();
  }
};
