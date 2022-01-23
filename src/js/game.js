/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus, no-console */
import Element from './elements';

let interval;

export default function game() {
  const start = new Element();

  start.addBoard();

  interval = setInterval(() => {
    start.interval();
  }, 1000);

  const container = document.querySelector('.board-container');

  container.addEventListener('click', evnFunc);
}

function evnFunc(event) {
  event.preventDefault();
  const hitNum = document.querySelector('.hit-number');
  const missNum = document.querySelector('.miss-number');

  if (missNum.textContent <= 1) {
    const info = document.querySelector('.container-info');
    const gameOverEl = document.createElement('div');
    gameOverEl.classList.add('game-over');
    gameOverEl.textContent = 'GAME OVER';
    console.log('game over');
    info.insertAdjacentElement(
      'beforeend',
      gameOverEl,
    );
    clearInterval(interval);
    this.removeEventListener('click', evnFunc);
  }

  if (event.target.classList.contains('goblin')) {
    hitNum.textContent++;
  } else {
    missNum.textContent--;
  }
}
