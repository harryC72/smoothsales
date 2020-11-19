import { v4 as uuidv4 } from 'uuid';

export const prizeHeader = [
  { id: uuidv4(), title: 'Position' },
  { id: uuidv4(), title: 'Prize' },
];

export const prize = [
  {_id: uuidv4(), position: 1, prize: 'The Journey', bonus: 20000 },
  {_id: uuidv4(), position: 2, prize: 'The Weekend', bonus: 10000 },
  {_id: uuidv4(), position: 3, prize: 'The Dinner', bonus: 5000 },
  {_id: uuidv4(), position: 4 - 6, prize: 'The Gift Card', bonus: 1500 },
  {_id: uuidv4(), position: 7 - 10, prize: 'The Coffee Mug', bonus: 800 },
];
