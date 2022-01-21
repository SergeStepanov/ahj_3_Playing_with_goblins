/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import Element from './elements';
import game from './game';

console.log('hello!');

const start = new Element();

start.addBoard();

export const interval = setInterval(() => {
  start.interval();
}, 1000);

game();
