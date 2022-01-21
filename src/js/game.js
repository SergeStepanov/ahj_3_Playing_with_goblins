/* eslint-disable no-plusplus, no-console */
import Element from './elements';

export default function game() {
  const start = new Element();

  start.addBoard();

  const interval = setInterval(() => {
    start.interval();
  }, 1000);

  const container = document.querySelector('.board-container');
  const hitNum = document.querySelector('.hit-number');
  const missNum = document.querySelector('.miss-number');

  container.addEventListener('click', (event) => {
    event.preventDefault();
    if (missNum.textContent <= 1) {
      const info = document.querySelector('.container-info');
      const gameOverEl = document.createElement('div');
      gameOverEl.classList.add('game-over');
      gameOverEl.textContent = 'GAME OVER';
      console.log('game over');
      // missNum.textContent = 5;
      info.insertAdjacentElement(
        'beforeend',
        gameOverEl,
      );
      clearInterval(interval);
    }

    if (event.target.classList.contains('goblin')) {
      hitNum.textContent++;
      // event.target.classList.remove('goblin');
    } else {
      missNum.textContent--;
    }
  });
}
