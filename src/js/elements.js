import RandomNumber from './random';
import PositionGoblin from './positionGoblin';

export default class Element {
  constructor() {
    this.board = 4;
    this.container = null;
    this.cells = [];
    this.random = new RandomNumber(this.board ** 2);
    this.posGoblin = null;
  }

  addBoard() {
    document.body.innerHTML = `
      <div class="container-info">
        <p class="miss">До проигрыша: <span class="miss-number">5</span> промахов.</p>
        <p class="hit">Всего попаданий: <span class="hit-number">0</span></p>
      </div>

      <div class="board-container">
      </div>
      `;

    this.container = document.querySelector('.board-container');

    for (let index = 0; index < this.board ** 2; index += 1) {
      const element = document.createElement('div');
      element.classList.add('board');
      this.container.insertAdjacentElement('beforeend', element);
    }
    this.cells = Array.from(this.container.children);
    this.cells[this.random.randNumber()].classList.add('goblin');
  }

  interval() {
    this.posGoblin = new PositionGoblin(this.cells);
    const randomNum = this.random.randNumber();
    const position = this.posGoblin.posGoblin();
    let random2 = this.random.randNumber();

    if (position !== randomNum) {
      this.cells[randomNum].classList.add('goblin');
      this.cells[position].classList.remove('goblin');
    } else {
      if (random2 === position) {
        random2 = this.random.randNumber();
      }
      this.cells[position].classList.remove('goblin');

      this.cells[random2].classList.add('goblin');
    }
  }
}
